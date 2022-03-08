namespace SpriteKind {
    export const purchase = SpriteKind.create()
    export const Tower = SpriteKind.create()
    export const towerPicture = SpriteKind.create()
    export const virus = SpriteKind.create()
    export const range = SpriteKind.create()
}
function check (tower: Sprite) {
    if (!(placing) && tower.kind() == SpriteKind.purchase) {
        bring(tower)
        placing = true
    } else if (placing && (tower.kind() == SpriteKind.purchase && tower.tileKindAt(TileDirection.Center, sprites.castle.tileGrass1))) {
        if (tower == mySprite) {
            if (info.score() >= 425) {
                info.changeScoreBy(-425)
                place(tower)
            }
        } else if (tower == mySprite2) {
            if (info.score() >= 350) {
                info.changeScoreBy(-350)
                place(tower)
            }
        } else if (tower == mySprite3) {
            if (info.score() >= 250) {
                info.changeScoreBy(-250)
                place(tower)
            }
        }
    } else if (!(placing) && tower.kind() == SpriteKind.Tower) {
        stats(tower)
    }
    return
}
sprites.onCreated(SpriteKind.Enemy, function (sprite) {
    sprites.setDataNumber(sprite, "hp", 5)
    sprite.z = 1
    tiles.placeOnRandomTile(sprite, assets.tile`myTile4`)
    sprite.setVelocity(25, 0)
    timer.after(2800, function () {
        sprite.setVelocity(0, 25)
        timer.after(3440, function () {
            sprite.setVelocity(-25, 0)
        })
    })
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (cursor.overlapsWith(mySprite) && placing) {
        _return(mySprite)
    } else if (cursor.overlapsWith(mySprite2) && placing) {
        _return(mySprite2)
    } else if (cursor.overlapsWith(mySprite3) && placing) {
        _return(mySprite3)
    } else {
        cancel()
    }
})
function cancel () {
    towername.setFlag(SpriteFlag.Invisible, true)
    tiername.setFlag(SpriteFlag.Invisible, true)
    vdmgname.setFlag(SpriteFlag.Invisible, true)
    bdmgname.setFlag(SpriteFlag.Invisible, true)
    ldmgname.setFlag(SpriteFlag.Invisible, true)
    ldmgname.setFlag(SpriteFlag.Invisible, true)
    upgradename.setFlag(SpriteFlag.Invisible, true)
    firerate.setFlag(SpriteFlag.Invisible, true)
    mySprite4.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    return
}
function loadstats () {
    towername = textsprite.create("", 0, 1)
    tiername = textsprite.create("", 0, 1)
    vdmgname = textsprite.create("", 0, 1)
    bdmgname = textsprite.create("", 0, 1)
    ldmgname = textsprite.create("", 0, 1)
    upgradename = textsprite.create("", 0, 1)
    firerate = textsprite.create("", 0, 1)
    mySprite4 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.towerPicture)
    towername.setFlag(SpriteFlag.Invisible, true)
    tiername.setFlag(SpriteFlag.Invisible, true)
    vdmgname.setFlag(SpriteFlag.Invisible, true)
    bdmgname.setFlag(SpriteFlag.Invisible, true)
    ldmgname.setFlag(SpriteFlag.Invisible, true)
    upgradename.setFlag(SpriteFlag.Invisible, true)
    firerate.setFlag(SpriteFlag.Invisible, true)
    mySprite4.setFlag(SpriteFlag.Invisible, true)
    tiles.placeOnTile(mySprite4, tiles.getTileLocation(1, 0))
    tiles.placeOnTile(firerate, tiles.getTileLocation(2, 1))
    mySprite4.x += 10
    mySprite4.y += 20
    return
}
function beginrounds () {
    timer.background(function () {
        story.printCharacterText("Don't download suspicious files so you don't get viruses.")
        info.changeScoreBy(100)
        if (round == 1) {
            for (let index = 0; index < 10; index++) {
                mySprite5 = sprites.create(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . 2 . . . . . . . . 
                    . . . . . . 2 2 2 . . . . . . . 
                    . . . . f f f f f f f . . . . . 
                    . . . f 2 2 2 2 2 2 2 f . . . . 
                    . . . f 2 2 2 2 2 2 2 f . . . . 
                    . . 2 f 2 2 f f f 2 2 f 2 . . . 
                    . 2 2 f 2 2 f 7 f 2 2 f 2 2 . . 
                    . . 2 f 2 2 f f f 2 2 f 2 . . . 
                    . . . f 2 2 2 2 2 2 2 f . . . . 
                    . . . f 2 2 2 2 2 2 2 f . . . . 
                    . . . . f f f f f f f . . . . . 
                    . . . . . . 2 2 2 . . . . . . . 
                    . . . . . . . 2 . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, SpriteKind.Enemy)
                pause(1000)
            }
            pause(2000)
            round += 1
            beginrounds()
        } else if (round == 2) {
            story.printCharacterText("Avoid and block bullies on the internet.")
            for (let index = 0; index < 7; index++) {
                mySprite6 = sprites.create(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . f f f f f f f . . . . . 
                    . . f f 4 4 4 4 4 4 4 f f . . . 
                    . f 4 4 4 4 4 4 4 4 4 4 4 f . . 
                    . f 4 4 4 4 4 4 4 4 4 4 4 f . . 
                    f 4 4 4 4 4 4 4 4 4 4 4 4 4 f . 
                    f 4 4 4 f 4 4 4 4 4 f 4 4 4 f . 
                    f 4 4 4 4 f 4 4 4 f 4 4 4 4 f . 
                    f 4 4 4 4 f 4 4 4 f 4 4 4 4 f . 
                    f 4 4 4 4 4 4 4 4 4 4 4 4 4 f . 
                    f 4 4 4 4 4 4 4 4 4 4 4 4 4 f . 
                    f 4 4 4 4 4 4 4 4 4 4 4 4 4 f . 
                    . f 4 4 4 4 4 4 4 4 4 4 4 f . . 
                    . f 4 4 4 4 4 4 4 4 4 4 4 f . . 
                    . . f f 4 4 4 4 4 4 4 f f . . . 
                    . . . . f f f f f f f . . . . . 
                    `, SpriteKind.Enemy)
                pause(2000)
            }
            pause(2000)
            round += 1
            beginrounds()
        } else if (round == 3) {
            story.printCharacterText("Don't click links on unsecure websites if it sends you offsite.")
            for (let index = 0; index < 10; index++) {
                mySprite8 = sprites.create(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . 7 . . . 7 7 7 . . 7 7 7 . 
                    . . 7 . 7 7 7 . . . 7 7 . . . . 
                    8 8 8 . 8 . 8 . 8 . 8 . 8 8 9 . 
                    8 8 8 . 8 9 8 . 8 8 8 . 8 9 8 9 
                    8 8 8 8 8 8 8 8 8 9 8 8 8 8 8 8 
                    8 . 8 9 8 9 8 9 8 . 8 . 8 . 8 . 
                    8 9 8 9 8 9 8 . 8 8 8 . 8 8 . . 
                    f f f f f f f f f f f f f f f f 
                    7 . 7 . . . 7 . . . . . . 7 . 7 
                    7 . . 7 . . 7 . . . 7 . . 7 . 7 
                    . 7 . . . . . 7 . . . 7 . . 7 7 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, SpriteKind.Enemy)
                pause(2000)
            }
            pause(2000)
            round += 1
            beginrounds()
        } else if (round == 4) {
            story.printCharacterText("Now to test your skills!")
            for (let index = 0; index < 5; index++) {
                mySprite5 = sprites.create(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . 2 . . . . . . . . 
                    . . . . . . 2 2 2 . . . . . . . 
                    . . . . f f f f f f f . . . . . 
                    . . . f 2 2 2 2 2 2 2 f . . . . 
                    . . . f 2 2 2 2 2 2 2 f . . . . 
                    . . 2 f 2 2 f f f 2 2 f 2 . . . 
                    . 2 2 f 2 2 f 7 f 2 2 f 2 2 . . 
                    . . 2 f 2 2 f f f 2 2 f 2 . . . 
                    . . . f 2 2 2 2 2 2 2 f . . . . 
                    . . . f 2 2 2 2 2 2 2 f . . . . 
                    . . . . f f f f f f f . . . . . 
                    . . . . . . 2 2 2 . . . . . . . 
                    . . . . . . . 2 . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, SpriteKind.Enemy)
                pause(500)
            }
            for (let index = 0; index < 5; index++) {
                mySprite6 = sprites.create(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . f f f f f f f . . . . . 
                    . . f f 4 4 4 4 4 4 4 f f . . . 
                    . f 4 4 4 4 4 4 4 4 4 4 4 f . . 
                    . f 4 4 4 4 4 4 4 4 4 4 4 f . . 
                    f 4 4 4 4 4 4 4 4 4 4 4 4 4 f . 
                    f 4 4 4 f 4 4 4 4 4 f 4 4 4 f . 
                    f 4 4 4 4 f 4 4 4 f 4 4 4 4 f . 
                    f 4 4 4 4 f 4 4 4 f 4 4 4 4 f . 
                    f 4 4 4 4 4 4 4 4 4 4 4 4 4 f . 
                    f 4 4 4 4 4 4 4 4 4 4 4 4 4 f . 
                    f 4 4 4 4 4 4 4 4 4 4 4 4 4 f . 
                    . f 4 4 4 4 4 4 4 4 4 4 4 f . . 
                    . f 4 4 4 4 4 4 4 4 4 4 4 f . . 
                    . . f f 4 4 4 4 4 4 4 f f . . . 
                    . . . . f f f f f f f . . . . . 
                    `, SpriteKind.Enemy)
                pause(500)
            }
            pause(5000)
            round += 1
            beginrounds()
        } else if (round == 5) {
            story.printCharacterText("Reported any bullies yet?")
            for (let index = 0; index < 10; index++) {
                mySprite5 = sprites.create(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . 2 . . . . . . . . 
                    . . . . . . 2 2 2 . . . . . . . 
                    . . . . f f f f f f f . . . . . 
                    . . . f 2 2 2 2 2 2 2 f . . . . 
                    . . . f 2 2 2 2 2 2 2 f . . . . 
                    . . 2 f 2 2 f f f 2 2 f 2 . . . 
                    . 2 2 f 2 2 f 7 f 2 2 f 2 2 . . 
                    . . 2 f 2 2 f f f 2 2 f 2 . . . 
                    . . . f 2 2 2 2 2 2 2 f . . . . 
                    . . . f 2 2 2 2 2 2 2 f . . . . 
                    . . . . f f f f f f f . . . . . 
                    . . . . . . 2 2 2 . . . . . . . 
                    . . . . . . . 2 . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, SpriteKind.Enemy)
                pause(500)
            }
            for (let index = 0; index < 10; index++) {
                mySprite6 = sprites.create(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . f f f f f f f . . . . . 
                    . . f f 4 4 4 4 4 4 4 f f . . . 
                    . f 4 4 4 4 4 4 4 4 4 4 4 f . . 
                    . f 4 4 4 4 4 4 4 4 4 4 4 f . . 
                    f 4 4 4 4 4 4 4 4 4 4 4 4 4 f . 
                    f 4 4 4 f 4 4 4 4 4 f 4 4 4 f . 
                    f 4 4 4 4 f 4 4 4 f 4 4 4 4 f . 
                    f 4 4 4 4 f 4 4 4 f 4 4 4 4 f . 
                    f 4 4 4 4 4 4 4 4 4 4 4 4 4 f . 
                    f 4 4 4 4 4 4 4 4 4 4 4 4 4 f . 
                    f 4 4 4 4 4 4 4 4 4 4 4 4 4 f . 
                    . f 4 4 4 4 4 4 4 4 4 4 4 f . . 
                    . f 4 4 4 4 4 4 4 4 4 4 4 f . . 
                    . . f f 4 4 4 4 4 4 4 f f . . . 
                    . . . . f f f f f f f . . . . . 
                    `, SpriteKind.Enemy)
                pause(500)
            }
            for (let index = 0; index < 10; index++) {
                mySprite8 = sprites.create(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . 7 . . . 7 7 7 . . 7 7 7 . 
                    . . 7 . 7 7 7 . . . 7 7 . . . . 
                    8 8 8 . 8 . 8 . 8 . 8 . 8 8 9 . 
                    8 8 8 . 8 9 8 . 8 8 8 . 8 9 8 9 
                    8 8 8 8 8 8 8 8 8 9 8 8 8 8 8 8 
                    8 . 8 9 8 9 8 9 8 . 8 . 8 . 8 . 
                    8 9 8 9 8 9 8 . 8 8 8 . 8 8 . . 
                    f f f f f f f f f f f f f f f f 
                    7 . 7 . . . 7 . . . . . . 7 . 7 
                    7 . . 7 . . 7 . . . 7 . . 7 . 7 
                    . 7 . . . . . 7 . . . 7 . . 7 7 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, SpriteKind.Enemy)
                pause(500)
            }
            pause(5000)
            game.over(true)
        }
    })
    return
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (cursor.overlapsWith(mySprite)) {
        check(mySprite)
    } else if (cursor.overlapsWith(mySprite2)) {
        check(mySprite2)
    } else if (cursor.overlapsWith(mySprite3)) {
        check(mySprite3)
    }
})
function showstats (tower: Sprite) {
    if (tower == mySprite) {
        towername.setText("AntiVirus")
        tiername.setText("Tier " + sprites.readDataNumber(tower, "tier"))
    } else if (tower == mySprite2) {
        towername.setText("Officer")
        tiername.setText("Tier " + sprites.readDataNumber(tower, "tier"))
    } else if (tower == mySprite3) {
        towername.setText("User")
        tiername.setText("Tier " + sprites.readDataNumber(tower, "tier"))
    }
    vdmgname.setText(" = " + sprites.readDataNumber(tower, "vdmg"))
    bdmgname.setText(" = " + sprites.readDataNumber(tower, "bdmg"))
    ldmgname.setText(" = " + sprites.readDataNumber(tower, "ldmg"))
    firerate.setText("" + sprites.readDataNumber(tower, "fr"))
    return
}
function circle (tower: Sprite) {
    col = 1
    row = 0
    for (let index = 0; index < 8; index++) {
        if (tower == mySprite) {
            mySprite7 = sprites.create(img`
                b . b . b . b . b . b . b . b . 
                . b . b . b . b . b . b . b . b 
                b . b . b . b . b . b . b . b . 
                . b . b . b . b . b . b . b . b 
                b . b . b . b . b . b . b . b . 
                . b . b . b . b . b . b . b . b 
                b . b . b . b . b . b . b . b . 
                . b . b . b . b . b . b . b . b 
                b . b . b . b . b . b . b . b . 
                . b . b . b . b . b . b . b . b 
                b . b . b . b . b . b . b . b . 
                . b . b . b . b . b . b . b . b 
                b . b . b . b . b . b . b . b . 
                . b . b . b . b . b . b . b . b 
                b . b . b . b . b . b . b . b . 
                . b . b . b . b . b . b . b . b 
                `, SpriteKind.range)
        } else if (tower == mySprite2) {
            mySprite7 = sprites.create(img`
                9 . 9 . 9 . 9 . 9 . 9 . 9 . 9 . 
                . 9 . 9 . 9 . 9 . 9 . 9 . 9 . 9 
                9 . 9 . 9 . 9 . 9 . 9 . 9 . 9 . 
                . 9 . 9 . 9 . 9 . 9 . 9 . 9 . 9 
                9 . 9 . 9 . 9 . 9 . 9 . 9 . 9 . 
                . 9 . 9 . 9 . 9 . 9 . 9 . 9 . 9 
                9 . 9 . 9 . 9 . 9 . 9 . 9 . 9 . 
                . 9 . 9 . 9 . 9 . 9 . 9 . 9 . 9 
                9 . 9 . 9 . 9 . 9 . 9 . 9 . 9 . 
                . 9 . 9 . 9 . 9 . 9 . 9 . 9 . 9 
                9 . 9 . 9 . 9 . 9 . 9 . 9 . 9 . 
                . 9 . 9 . 9 . 9 . 9 . 9 . 9 . 9 
                9 . 9 . 9 . 9 . 9 . 9 . 9 . 9 . 
                . 9 . 9 . 9 . 9 . 9 . 9 . 9 . 9 
                9 . 9 . 9 . 9 . 9 . 9 . 9 . 9 . 
                . 9 . 9 . 9 . 9 . 9 . 9 . 9 . 9 
                `, SpriteKind.range)
        } else if (tower == mySprite3) {
            mySprite7 = sprites.create(img`
                1 . 1 . 1 . 1 . 1 . 1 . 1 . 1 . 
                . 1 . 1 . 1 . 1 . 1 . 1 . 1 . 1 
                1 . 1 . 1 . 1 . 1 . 1 . 1 . 1 . 
                . 1 . 1 . 1 . 1 . 1 . 1 . 1 . 1 
                1 . 1 . 1 . 1 . 1 . 1 . 1 . 1 . 
                . 1 . 1 . 1 . 1 . 1 . 1 . 1 . 1 
                1 . 1 . 1 . 1 . 1 . 1 . 1 . 1 . 
                . 1 . 1 . 1 . 1 . 1 . 1 . 1 . 1 
                1 . 1 . 1 . 1 . 1 . 1 . 1 . 1 . 
                . 1 . 1 . 1 . 1 . 1 . 1 . 1 . 1 
                1 . 1 . 1 . 1 . 1 . 1 . 1 . 1 . 
                . 1 . 1 . 1 . 1 . 1 . 1 . 1 . 1 
                1 . 1 . 1 . 1 . 1 . 1 . 1 . 1 . 
                . 1 . 1 . 1 . 1 . 1 . 1 . 1 . 1 
                1 . 1 . 1 . 1 . 1 . 1 . 1 . 1 . 
                . 1 . 1 . 1 . 1 . 1 . 1 . 1 . 1 
                `, SpriteKind.range)
        }
        tiles.placeOnTile(mySprite7, grid.add(tiles.locationOfSprite(tower), col, row))
        if (mySprite7.tileKindAt(TileDirection.Center, sprites.castle.tileGrass1)) {
            mySprite7.destroy()
        }
        if (row == -1) {
            col += 1
        } else if (col == -1) {
            row += -1
        } else if (row == 1) {
            col += -1
        } else if (col == 1) {
            row += 1
        } else {
            col += 1
        }
        if (mySprite7.overlapsWith(mySprite7)) {
            break;
        }
    }
    return
}
function place_stats () {
    tiles.placeOnTile(towername, tiles.getTileLocation(1, 2))
    tiles.placeOnTile(tiername, tiles.getTileLocation(1, 3))
    tiles.placeOnTile(vdmgname, tiles.getTileLocation(1, 4))
    tiles.placeOnTile(bdmgname, tiles.getTileLocation(1, 5))
    tiles.placeOnTile(ldmgname, tiles.getTileLocation(1, 6))
    return
}
function loadicons () {
    vdmgname.setIcon(img`
        . 2 . . . . . 2 . . . . . . 2 . 
        . 2 . . f f f f f f f . 2 2 . . 
        . . 2 f 2 2 7 7 2 2 2 f . . . 2 
        . . f 2 2 7 7 7 7 2 2 2 f . 2 . 
        . f 2 2 f f f f f f f 2 2 f 2 . 
        . f 2 7 f 7 7 7 7 7 f 2 2 f . . 
        . f 7 7 f 1 1 1 1 1 f 7 2 f 2 2 
        . f 2 7 f 7 7 7 7 7 f 7 7 f . . 
        2 f 7 7 f 1 1 1 1 1 f 7 2 f . 2 
        . f 2 2 f 7 7 7 7 7 f 7 2 f 2 . 
        . f 2 2 f f f f f f f 7 2 f . . 
        . . f 2 2 7 7 7 7 2 2 2 f . . . 
        . . 2 f 2 2 7 7 2 7 2 f . 2 . 2 
        . 2 . . f f f f f f f 2 . . 2 . 
        2 . . . . . 2 . . . . . 2 . . . 
        . . . . . . . 2 . . . 2 . . . . 
        `)
    bdmgname.setIcon(img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f . . . . . 
        . . f f 4 4 4 4 4 4 4 f f . . . 
        . f 4 4 4 4 4 4 4 4 4 4 4 f . . 
        . f 4 4 4 4 4 4 4 4 4 4 4 f . . 
        f 4 4 4 4 4 4 4 4 4 4 4 4 4 f . 
        f 4 4 4 f 4 4 4 4 4 f 4 4 4 f . 
        f 4 4 4 4 f 4 4 4 f 4 4 4 4 f . 
        f 4 4 4 4 f 4 4 4 f 4 4 4 4 f . 
        f 4 4 4 4 4 4 4 4 4 4 4 4 4 f . 
        f 4 4 4 4 4 4 4 4 4 4 4 4 4 f . 
        f 4 4 4 4 4 4 4 4 4 4 4 4 4 f . 
        . f 4 4 4 4 4 4 4 4 4 4 4 f . . 
        . f 4 4 4 4 4 4 4 4 4 4 4 f . . 
        . . f f 4 4 4 4 4 4 4 f f . . . 
        . . . . f f f f f f f . . . . . 
        `)
    ldmgname.setIcon(img`
        ....................
        ....7......7...7....
        .7...7..7.7......7..
        ...7.....77...7.....
        ..7..7....7....7....
        ..7...7...7....7..7.
        87..8.878.888.7888.7
        878.8.878.8.8788.8.7
        8.8787888.87878888.7
        88888787878887787877
        ffffffffffffffffffff
        77777777777777777777
        ..7....7..7.........
        ...7...7...7.....7..
        7...7..7....7..7....
        ........7...........
        `)
    return
}
sprites.onOverlap(SpriteKind.range, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (sprite.image.equals(img`
        b . b . b . b . b . b . b . b . 
        . b . b . b . b . b . b . b . b 
        b . b . b . b . b . b . b . b . 
        . b . b . b . b . b . b . b . b 
        b . b . b . b . b . b . b . b . 
        . b . b . b . b . b . b . b . b 
        b . b . b . b . b . b . b . b . 
        . b . b . b . b . b . b . b . b 
        b . b . b . b . b . b . b . b . 
        . b . b . b . b . b . b . b . b 
        b . b . b . b . b . b . b . b . 
        . b . b . b . b . b . b . b . b 
        b . b . b . b . b . b . b . b . 
        . b . b . b . b . b . b . b . b 
        b . b . b . b . b . b . b . b . 
        . b . b . b . b . b . b . b . b 
        `)) {
        if (otherSprite.image.equals(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . 2 . . . . . . . . 
            . . . . . . 2 2 2 . . . . . . . 
            . . . . f f f f f f f . . . . . 
            . . . f 2 2 2 2 2 2 2 f . . . . 
            . . . f 2 2 2 2 2 2 2 f . . . . 
            . . 2 f 2 2 f f f 2 2 f 2 . . . 
            . 2 2 f 2 2 f 7 f 2 2 f 2 2 . . 
            . . 2 f 2 2 f f f 2 2 f 2 . . . 
            . . . f 2 2 2 2 2 2 2 f . . . . 
            . . . f 2 2 2 2 2 2 2 f . . . . 
            . . . . f f f f f f f . . . . . 
            . . . . . . 2 2 2 . . . . . . . 
            . . . . . . . 2 . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)) {
            sprites.changeDataNumberBy(otherSprite, "hp", -3)
            if (sprites.readDataNumber(otherSprite, "hp") <= 0) {
                otherSprite.destroy()
                info.changeScoreBy(1)
            }
            pause(1000)
        } else if (otherSprite.image.equals(img`
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f f . . . . . 
            . . f f 4 4 4 4 4 4 4 f f . . . 
            . f 4 4 4 4 4 4 4 4 4 4 4 f . . 
            . f 4 4 4 4 4 4 4 4 4 4 4 f . . 
            f 4 4 4 4 4 4 4 4 4 4 4 4 4 f . 
            f 4 4 4 f 4 4 4 4 4 f 4 4 4 f . 
            f 4 4 4 4 f 4 4 4 f 4 4 4 4 f . 
            f 4 4 4 4 f 4 4 4 f 4 4 4 4 f . 
            f 4 4 4 4 4 4 4 4 4 4 4 4 4 f . 
            f 4 4 4 4 4 4 4 4 4 4 4 4 4 f . 
            f 4 4 4 4 4 4 4 4 4 4 4 4 4 f . 
            . f 4 4 4 4 4 4 4 4 4 4 4 f . . 
            . f 4 4 4 4 4 4 4 4 4 4 4 f . . 
            . . f f 4 4 4 4 4 4 4 f f . . . 
            . . . . f f f f f f f . . . . . 
            `)) {
            sprites.changeDataNumberBy(otherSprite, "hp", 0)
        } else if (otherSprite.image.equals(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . 7 . . . 7 7 7 . . 7 7 7 . 
            . . 7 . 7 7 7 . . . 7 7 . . . . 
            8 8 8 . 8 . 8 . 8 . 8 . 8 8 9 . 
            8 8 8 . 8 9 8 . 8 8 8 . 8 9 8 9 
            8 8 8 8 8 8 8 8 8 9 8 8 8 8 8 8 
            8 . 8 9 8 9 8 9 8 . 8 . 8 . 8 . 
            8 9 8 9 8 9 8 . 8 8 8 . 8 8 . . 
            f f f f f f f f f f f f f f f f 
            7 . 7 . . . 7 . . . . . . 7 . 7 
            7 . . 7 . . 7 . . . 7 . . 7 . 7 
            . 7 . . . . . 7 . . . 7 . . 7 7 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)) {
            sprites.changeDataNumberBy(otherSprite, "hp", -1)
            if (sprites.readDataNumber(otherSprite, "hp") <= 0) {
                otherSprite.destroy()
                info.changeScoreBy(1)
            }
            pause(1000)
        }
    } else if (sprite.image.equals(img`
        9 . 9 . 9 . 9 . 9 . 9 . 9 . 9 . 
        . 9 . 9 . 9 . 9 . 9 . 9 . 9 . 9 
        9 . 9 . 9 . 9 . 9 . 9 . 9 . 9 . 
        . 9 . 9 . 9 . 9 . 9 . 9 . 9 . 9 
        9 . 9 . 9 . 9 . 9 . 9 . 9 . 9 . 
        . 9 . 9 . 9 . 9 . 9 . 9 . 9 . 9 
        9 . 9 . 9 . 9 . 9 . 9 . 9 . 9 . 
        . 9 . 9 . 9 . 9 . 9 . 9 . 9 . 9 
        9 . 9 . 9 . 9 . 9 . 9 . 9 . 9 . 
        . 9 . 9 . 9 . 9 . 9 . 9 . 9 . 9 
        9 . 9 . 9 . 9 . 9 . 9 . 9 . 9 . 
        . 9 . 9 . 9 . 9 . 9 . 9 . 9 . 9 
        9 . 9 . 9 . 9 . 9 . 9 . 9 . 9 . 
        . 9 . 9 . 9 . 9 . 9 . 9 . 9 . 9 
        9 . 9 . 9 . 9 . 9 . 9 . 9 . 9 . 
        . 9 . 9 . 9 . 9 . 9 . 9 . 9 . 9 
        `)) {
        if (otherSprite.image.equals(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . 2 . . . . . . . . 
            . . . . . . 2 2 2 . . . . . . . 
            . . . . f f f f f f f . . . . . 
            . . . f 2 2 2 2 2 2 2 f . . . . 
            . . . f 2 2 2 2 2 2 2 f . . . . 
            . . 2 f 2 2 f f f 2 2 f 2 . . . 
            . 2 2 f 2 2 f 7 f 2 2 f 2 2 . . 
            . . 2 f 2 2 f f f 2 2 f 2 . . . 
            . . . f 2 2 2 2 2 2 2 f . . . . 
            . . . f 2 2 2 2 2 2 2 f . . . . 
            . . . . f f f f f f f . . . . . 
            . . . . . . 2 2 2 . . . . . . . 
            . . . . . . . 2 . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)) {
            sprites.changeDataNumberBy(otherSprite, "hp", 0)
        } else if (otherSprite.image.equals(img`
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f f . . . . . 
            . . f f 4 4 4 4 4 4 4 f f . . . 
            . f 4 4 4 4 4 4 4 4 4 4 4 f . . 
            . f 4 4 4 4 4 4 4 4 4 4 4 f . . 
            f 4 4 4 4 4 4 4 4 4 4 4 4 4 f . 
            f 4 4 4 f 4 4 4 4 4 f 4 4 4 f . 
            f 4 4 4 4 f 4 4 4 f 4 4 4 4 f . 
            f 4 4 4 4 f 4 4 4 f 4 4 4 4 f . 
            f 4 4 4 4 4 4 4 4 4 4 4 4 4 f . 
            f 4 4 4 4 4 4 4 4 4 4 4 4 4 f . 
            f 4 4 4 4 4 4 4 4 4 4 4 4 4 f . 
            . f 4 4 4 4 4 4 4 4 4 4 4 f . . 
            . f 4 4 4 4 4 4 4 4 4 4 4 f . . 
            . . f f 4 4 4 4 4 4 4 f f . . . 
            . . . . f f f f f f f . . . . . 
            `)) {
            sprites.changeDataNumberBy(otherSprite, "hp", -2)
            if (sprites.readDataNumber(otherSprite, "hp") <= 0) {
                otherSprite.destroy()
                info.changeScoreBy(1)
            }
            pause(1000)
        } else if (otherSprite.image.equals(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . 7 . . . 7 7 7 . . 7 7 7 . 
            . . 7 . 7 7 7 . . . 7 7 . . . . 
            8 8 8 . 8 . 8 . 8 . 8 . 8 8 9 . 
            8 8 8 . 8 9 8 . 8 8 8 . 8 9 8 9 
            8 8 8 8 8 8 8 8 8 9 8 8 8 8 8 8 
            8 . 8 9 8 9 8 9 8 . 8 . 8 . 8 . 
            8 9 8 9 8 9 8 . 8 8 8 . 8 8 . . 
            f f f f f f f f f f f f f f f f 
            7 . 7 . . . 7 . . . . . . 7 . 7 
            7 . . 7 . . 7 . . . 7 . . 7 . 7 
            . 7 . . . . . 7 . . . 7 . . 7 7 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)) {
            sprites.changeDataNumberBy(otherSprite, "hp", -1)
            if (sprites.readDataNumber(otherSprite, "hp") <= 0) {
                otherSprite.destroy()
                info.changeScoreBy(1)
            }
            pause(1000)
        }
    } else if (sprite.image.equals(img`
        1 . 1 . 1 . 1 . 1 . 1 . 1 . 1 . 
        . 1 . 1 . 1 . 1 . 1 . 1 . 1 . 1 
        1 . 1 . 1 . 1 . 1 . 1 . 1 . 1 . 
        . 1 . 1 . 1 . 1 . 1 . 1 . 1 . 1 
        1 . 1 . 1 . 1 . 1 . 1 . 1 . 1 . 
        . 1 . 1 . 1 . 1 . 1 . 1 . 1 . 1 
        1 . 1 . 1 . 1 . 1 . 1 . 1 . 1 . 
        . 1 . 1 . 1 . 1 . 1 . 1 . 1 . 1 
        1 . 1 . 1 . 1 . 1 . 1 . 1 . 1 . 
        . 1 . 1 . 1 . 1 . 1 . 1 . 1 . 1 
        1 . 1 . 1 . 1 . 1 . 1 . 1 . 1 . 
        . 1 . 1 . 1 . 1 . 1 . 1 . 1 . 1 
        1 . 1 . 1 . 1 . 1 . 1 . 1 . 1 . 
        . 1 . 1 . 1 . 1 . 1 . 1 . 1 . 1 
        1 . 1 . 1 . 1 . 1 . 1 . 1 . 1 . 
        . 1 . 1 . 1 . 1 . 1 . 1 . 1 . 1 
        `)) {
        if (otherSprite.image.equals(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . 2 . . . . . . . . 
            . . . . . . 2 2 2 . . . . . . . 
            . . . . f f f f f f f . . . . . 
            . . . f 2 2 2 2 2 2 2 f . . . . 
            . . . f 2 2 2 2 2 2 2 f . . . . 
            . . 2 f 2 2 f f f 2 2 f 2 . . . 
            . 2 2 f 2 2 f 7 f 2 2 f 2 2 . . 
            . . 2 f 2 2 f f f 2 2 f 2 . . . 
            . . . f 2 2 2 2 2 2 2 f . . . . 
            . . . f 2 2 2 2 2 2 2 f . . . . 
            . . . . f f f f f f f . . . . . 
            . . . . . . 2 2 2 . . . . . . . 
            . . . . . . . 2 . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)) {
            sprites.changeDataNumberBy(otherSprite, "hp", -1)
            if (sprites.readDataNumber(otherSprite, "hp") <= 0) {
                otherSprite.destroy()
                info.changeScoreBy(1)
            }
            pause(800)
        } else if (otherSprite.image.equals(img`
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f f . . . . . 
            . . f f 4 4 4 4 4 4 4 f f . . . 
            . f 4 4 4 4 4 4 4 4 4 4 4 f . . 
            . f 4 4 4 4 4 4 4 4 4 4 4 f . . 
            f 4 4 4 4 4 4 4 4 4 4 4 4 4 f . 
            f 4 4 4 f 4 4 4 4 4 f 4 4 4 f . 
            f 4 4 4 4 f 4 4 4 f 4 4 4 4 f . 
            f 4 4 4 4 f 4 4 4 f 4 4 4 4 f . 
            f 4 4 4 4 4 4 4 4 4 4 4 4 4 f . 
            f 4 4 4 4 4 4 4 4 4 4 4 4 4 f . 
            f 4 4 4 4 4 4 4 4 4 4 4 4 4 f . 
            . f 4 4 4 4 4 4 4 4 4 4 4 f . . 
            . f 4 4 4 4 4 4 4 4 4 4 4 f . . 
            . . f f 4 4 4 4 4 4 4 f f . . . 
            . . . . f f f f f f f . . . . . 
            `)) {
            sprites.changeDataNumberBy(otherSprite, "hp", -1)
            if (sprites.readDataNumber(otherSprite, "hp") <= 0) {
                otherSprite.destroy()
                info.changeScoreBy(1)
            }
            pause(800)
        } else if (otherSprite.image.equals(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . 7 . . . 7 7 7 . . 7 7 7 . 
            . . 7 . 7 7 7 . . . 7 7 . . . . 
            8 8 8 . 8 . 8 . 8 . 8 . 8 8 9 . 
            8 8 8 . 8 9 8 . 8 8 8 . 8 9 8 9 
            8 8 8 8 8 8 8 8 8 9 8 8 8 8 8 8 
            8 . 8 9 8 9 8 9 8 . 8 . 8 . 8 . 
            8 9 8 9 8 9 8 . 8 8 8 . 8 8 . . 
            f f f f f f f f f f f f f f f f 
            7 . 7 . . . 7 . . . . . . 7 . 7 
            7 . . 7 . . 7 . . . 7 . . 7 . 7 
            . 7 . . . . . 7 . . . 7 . . 7 7 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)) {
            sprites.changeDataNumberBy(otherSprite, "hp", -1)
            if (sprites.readDataNumber(otherSprite, "hp") <= 0) {
                otherSprite.destroy()
                info.changeScoreBy(1)
            }
            pause(800)
        }
    }
})
function place (tower: Sprite) {
    tower.follow(cursor, 0)
    placing = false
    tower.setKind(SpriteKind.Tower)
    if (tower == mySprite) {
        sprites.setDataNumber(tower, "vdmg", 3)
        sprites.setDataNumber(tower, "bdmg", 0)
        sprites.setDataNumber(tower, "ldmg", 1)
        sprites.setDataNumber(tower, "fr", 0.5)
        sprites.setDataNumber(tower, "tier", 0)
        place_range(tower)
    } else if (tower == mySprite2) {
        sprites.setDataNumber(tower, "vdmg", 0)
        sprites.setDataNumber(tower, "bdmg", 2)
        sprites.setDataNumber(tower, "ldmg", 1)
        sprites.setDataNumber(tower, "fr", 0.75)
        sprites.setDataNumber(tower, "tier", 0)
        place_range(tower)
    } else if (tower == mySprite3) {
        sprites.setDataNumber(tower, "vdmg", 1)
        sprites.setDataNumber(tower, "bdmg", 1)
        sprites.setDataNumber(tower, "ldmg", 1)
        sprites.setDataNumber(tower, "fr", 0.8)
        sprites.setDataNumber(tower, "tier", 0)
        place_range(tower)
    }
    return
}
function place_range (tower: Sprite) {
    if (tower == mySprite) {
        circle(tower)
    } else if (tower == mySprite2) {
        circle(tower)
    } else if (tower == mySprite3) {
        circle(tower)
    }
    return
}
scene.onOverlapTile(SpriteKind.Enemy, assets.tile`myTile6`, function (sprite, location) {
    scene.cameraShake(4, 500)
    sprite.destroy()
    info.changeLifeBy(-1)
})
function load_towers () {
    mySprite = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . f f f f f f f f f f f f f f . 
        . f b b b b b b b b b 7 f 7 f . 
        . f b b b b b b b b b f 7 f f . 
        . f b b f f f f f b b 7 f 7 f . 
        . f b f b b b b b f b b b b f . 
        . f b f b d d d b f b b b b f . 
        . f b f b d 1 d b f b b b b f . 
        . f b f b d d d b f b b b b f . 
        . f b f b b b b b f b f b f f . 
        . f b b f f f f f b b f f f f . 
        . f b b b b b b b b b b f b f . 
        . f b b b b b b b b b f f f f . 
        . f b b b b b b b b b b b b f . 
        . f f f f f f f f f f f f f f . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.purchase)
    mySprite2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . f f f f f f f f f f f f f f . 
        . f 9 9 9 9 9 9 9 9 9 f 7 f f . 
        . f 9 9 9 9 9 9 9 9 9 7 f 7 f . 
        . f 9 6 6 6 6 9 9 9 9 f 7 f f . 
        . f 9 6 1 1 6 f 2 9 9 9 9 9 f . 
        . f 9 6 f f 6 9 9 9 9 9 9 9 f . 
        . f 9 6 1 1 6 f 2 9 9 9 9 9 f . 
        . f 9 6 f f 6 9 9 9 9 9 9 9 f . 
        . f 9 6 1 1 6 f 7 9 9 9 9 9 f . 
        . f 9 6 f f 6 9 9 9 9 9 9 9 f . 
        . f 9 6 6 6 6 9 9 9 9 9 9 9 f . 
        . f 9 9 9 9 9 9 9 9 9 9 9 9 f . 
        . f 9 9 9 9 9 9 9 9 9 9 9 9 f . 
        . f f f f f f f f f f f f f f . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.purchase)
    mySprite3 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . f f f f f f f f f f f f f f . 
        . f d d d d d d d d d d d d f . 
        . f d d d d b b b b d d d d f . 
        . f d d d b b b b b b d d d f . 
        . f d d b b b b b b b b d d f . 
        . f d d b b b b b b b b d d f . 
        . f d d b b b b b b b b d d f . 
        . f d d b b b b b b b b d d f . 
        . f d d d b b b b b b d d d f . 
        . f d d d d b b b b d d d d f . 
        . f d b b b b b b b b b b d f . 
        . f b b b b b b b b b b b b f . 
        . f b b b b b b b b b b b b f . 
        . f f f f f f f f f f f f f f . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.purchase)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(9, 1))
    tiles.placeOnTile(mySprite2, tiles.getTileLocation(9, 2))
    tiles.placeOnTile(mySprite3, tiles.getTileLocation(9, 3))
    mySprite.z = 1
    mySprite2.z = 1
    mySprite3.z = 1
    return
}
function _return (tower: Sprite) {
    placing = false
    tower.follow(cursor, 0)
    if (tower == mySprite) {
        tiles.placeOnTile(tower, tiles.getTileLocation(9, 1))
    } else if (tower == mySprite2) {
        tiles.placeOnTile(tower, tiles.getTileLocation(9, 2))
    } else if (tower == mySprite3) {
        tiles.placeOnTile(tower, tiles.getTileLocation(9, 3))
    }
}
function load_cursor () {
    cursor = sprites.create(assets.image`myImage`, SpriteKind.Player)
    grid.snap(cursor)
    grid.moveWithButtons(cursor)
}
function bring (tower: Sprite) {
    tower.follow(cursor, 200)
    return
}
function stats (tower: Sprite) {
    towername.setFlag(SpriteFlag.Invisible, false)
    tiername.setFlag(SpriteFlag.Invisible, false)
    vdmgname.setFlag(SpriteFlag.Invisible, false)
    bdmgname.setFlag(SpriteFlag.Invisible, false)
    ldmgname.setFlag(SpriteFlag.Invisible, false)
    upgradename.setFlag(SpriteFlag.Invisible, false)
    firerate.setFlag(SpriteFlag.Invisible, false)
    mySprite4.setFlag(SpriteFlag.Invisible, false)
    if (tower == mySprite) {
        mySprite4.setImage(mySprite.image)
    } else if (tower == mySprite2) {
        mySprite4.setImage(mySprite2.image)
    } else if (tower == mySprite3) {
        mySprite4.setImage(mySprite3.image)
    }
    scaling.scaleToPixels(mySprite4, 32, ScaleDirection.Horizontally, ScaleAnchor.Right)
    scaling.scaleToPixels(mySprite4, 32, ScaleDirection.Vertically, ScaleAnchor.Bottom)
    showstats(tower)
    place_stats()
    return
}
let mySprite7: Sprite = null
let row = 0
let col = 0
let mySprite8: Sprite = null
let mySprite6: Sprite = null
let mySprite5: Sprite = null
let mySprite4: Sprite = null
let firerate: TextSprite = null
let upgradename: TextSprite = null
let ldmgname: TextSprite = null
let bdmgname: TextSprite = null
let vdmgname: TextSprite = null
let tiername: TextSprite = null
let towername: TextSprite = null
let cursor: Sprite = null
let mySprite3: Sprite = null
let mySprite2: Sprite = null
let mySprite: Sprite = null
let placing = false
let round = 0
tiles.setCurrentTilemap(tilemap`level1`)
let textSprite = textsprite.create("Round: " + round, 0, 1)
tiles.placeOnTile(textSprite, tiles.getTileLocation(6, 0))
info.setScore(500)
info.setLife(3)
load_cursor()
load_towers()
loadstats()
loadicons()
story.printCharacterText("Welcome to this game where you defend against common threats on the internet")
story.printCharacterText("AntiVirus = £425, Officer = £350, User = £250")
story.printCharacterText("Good luck!")
pause(2000)
round += 1
beginrounds()
forever(function () {
    textSprite.setText("Round: " + round)
})
