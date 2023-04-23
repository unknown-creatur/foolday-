input.onGesture(Gesture.LogoDown, function () {
    遊戲 = 1
})
input.onGesture(Gesture.TiltLeft, function () {
    if (遊戲 == 2) {
        if (game.isRunning()) {
            _2p.change(LedSpriteProperty.X, -1)
        }
    }
})
input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    if (!(判斷 == 1)) {
        if (遊戲 == 1) {
            basic.showLeds(`
                . # # # #
                # # . # .
                . # . # .
                # # . # .
                . # . # .
                `)
            basic.showLeds(`
                . . # . .
                # # # # #
                # . # . #
                # # # # #
                . . # . .
                `)
            basic.showLeds(`
                . # . # .
                # # # # #
                . # . # .
                # # # # #
                # . . . #
                `)
            game.setScore(0)
            airplane = game.createSprite(0, 0)
            _1p = game.createSprite(1, 4)
            _2p = game.createSprite(3, 4)
            遊戲 = 2
        } else {
            if (input.compassHeading() < 45 || input.compassHeading() > 315) {
                basic.showString("S")
            } else if (input.compassHeading() < 225 || input.compassHeading() > 135) {
                basic.showString("N")
            } else if (input.compassHeading() < 315 || input.compassHeading() > 225) {
                basic.showString("E")
            } else if (input.compassHeading() < 315 || input.compassHeading() > 225) {
                basic.showString("W")
            }
            basic.pause(5000)
            basic.showString("light:")
            for (let index = 0; index < 3; index++) {
                basic.showNumber(randint(-44, 300))
                basic.pause(50)
            }
            basic.showString("oh...the light changes quickly...the sun is anomaly")
            for (let index = 0; index < 3; index++) {
                basic.showNumber(randint(-44, 300))
                basic.pause(50)
            }
            basic.pause(5000)
            if (input.temperature() >= 100) {
                basic.showString("Maybe it will snow ")
            } else if (input.temperature() <= 0) {
                basic.showString("It's hot, right?")
            } else if (input.temperature() < 100 && input.temperature() > 0) {
                for (let index = 0; index < 3; index++) {
                    basic.showString("" + randint(1, 99) + "C")
                    basic.pause(50)
                }
                basic.showString("oh...the temperature changes quickly...the weather is anomaly")
                for (let index = 0; index < 3; index++) {
                    basic.showString("" + randint(1, 99) + "C")
                    basic.pause(50)
                }
            }
            判斷 = 1
        }
    }
})
input.onGesture(Gesture.ScreenDown, function () {
    basic.showString("" + input.temperature() + "C")
    basic.pause(1000)
    basic.showString("light:" + input.lightLevel())
    basic.pause(1000)
    if (input.compassHeading() < 45 || input.compassHeading() > 315) {
        basic.showString("N")
    } else if (input.compassHeading() < 225 || input.compassHeading() > 135) {
        basic.showString("S")
    } else if (input.compassHeading() < 315 || input.compassHeading() > 225) {
        basic.showString("W")
    } else if (input.compassHeading() < 315 || input.compassHeading() > 225) {
        basic.showString("E")
    }
    basic.pause(1000)
    basic.showString("happy fools day!")
})
input.onButtonPressed(Button.A, function () {
    if (遊戲 == 2) {
        if (game.isRunning()) {
            _1p.change(LedSpriteProperty.X, -1)
        }
    }
})
input.onGesture(Gesture.Shake, function () {
    if (遊戲 == 2) {
        if (game.isRunning()) {
            bullet1 = game.createSprite(2, 4)
            bullet2 = game.createSprite(0, 4)
            bullet3 = game.createSprite(4, 4)
            bullet4 = game.createSprite(1, 4)
            bullet5 = game.createSprite(3, 4)
            for (let index = 0; index < 5; index++) {
                for (let index = 0; index < 4; index++) {
                    bullet1.change(LedSpriteProperty.X, -1)
                    bullet2.change(LedSpriteProperty.X, -1)
                    bullet3.change(LedSpriteProperty.X, -1)
                    bullet4.change(LedSpriteProperty.X, -1)
                    bullet5.change(LedSpriteProperty.X, -1)
                    basic.pause(100)
                }
                bullet1.set(LedSpriteProperty.X, 2)
                bullet1.set(LedSpriteProperty.Y, 4)
                bullet2.set(LedSpriteProperty.X, 0)
                bullet2.set(LedSpriteProperty.Y, 4)
                bullet3.set(LedSpriteProperty.X, 4)
                bullet3.set(LedSpriteProperty.Y, 4)
                bullet4.set(LedSpriteProperty.X, 1)
                bullet4.set(LedSpriteProperty.Y, 4)
                bullet5.set(LedSpriteProperty.X, 3)
                bullet5.set(LedSpriteProperty.Y, 4)
            }
            bullet1.delete()
            bullet2.delete()
            bullet3.delete()
            bullet4.delete()
            bullet5.delete()
        }
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    遊戲 = 1
})
input.onButtonPressed(Button.AB, function () {
    if (遊戲 == 2) {
        if (game.isRunning()) {
            bullet1 = game.createSprite(_1p.get(LedSpriteProperty.X), _1p.get(LedSpriteProperty.Y))
            bullet2 = game.createSprite(_2p.get(LedSpriteProperty.X), _2p.get(LedSpriteProperty.Y))
            for (let index = 0; index < 4; index++) {
                bullet1.change(LedSpriteProperty.Y, -1)
                bullet2.change(LedSpriteProperty.Y, -1)
                basic.pause(100)
            }
            bullet1.delete()
            bullet2.delete()
        }
    }
})
input.onButtonPressed(Button.B, function () {
    if (遊戲 == 2) {
        if (game.isRunning()) {
            _1p.change(LedSpriteProperty.X, 1)
        }
    }
})
input.onGesture(Gesture.TiltRight, function () {
    if (遊戲 == 2) {
        if (game.isRunning()) {
            _2p.change(LedSpriteProperty.X, 1)
        }
    }
})
let missile2: game.LedSprite = null
let missile1: game.LedSprite = null
let bullet5: game.LedSprite = null
let bullet4: game.LedSprite = null
let bullet3: game.LedSprite = null
let bullet2: game.LedSprite = null
let bullet1: game.LedSprite = null
let _1p: game.LedSprite = null
let airplane: game.LedSprite = null
let _2p: game.LedSprite = null
let 遊戲 = 0
let 判斷 = 0
basic.showString("Hello!")
判斷 = 0
遊戲 = 0
basic.forever(function () {
    if (遊戲 == 2) {
        if (game.isRunning()) {
            if (airplane.isTouching(_1p)) {
                game.gameOver()
                遊戲 = 0
            }
        }
    }
})
basic.forever(function () {
    if (遊戲 == 2) {
        if (game.isRunning()) {
            if (bullet1) {
                if (bullet1.isTouching(airplane)) {
                    game.addScore(1e+50)
                    airplane.set(LedSpriteProperty.X, 0)
                    airplane.set(LedSpriteProperty.Y, 0)
                }
            }
            if (bullet2) {
                if (bullet2.isTouching(airplane)) {
                    game.addScore(1e+50)
                    airplane.set(LedSpriteProperty.X, 0)
                    airplane.set(LedSpriteProperty.Y, 0)
                }
            }
            if (bullet3) {
                if (bullet3.isTouching(airplane)) {
                    game.addScore(1e+50)
                    airplane.set(LedSpriteProperty.X, 0)
                    airplane.set(LedSpriteProperty.Y, 0)
                }
            }
            if (bullet4) {
                if (bullet4.isTouching(airplane)) {
                    game.addScore(1e+50)
                    airplane.set(LedSpriteProperty.X, 0)
                    airplane.set(LedSpriteProperty.Y, 0)
                }
            }
            if (bullet5) {
                if (bullet5.isTouching(airplane)) {
                    game.addScore(1e+50)
                    airplane.set(LedSpriteProperty.X, 0)
                    airplane.set(LedSpriteProperty.Y, 0)
                }
            }
            if (missile1) {
                if (missile1.isTouching(airplane)) {
                    game.addScore(1e+50)
                    airplane.set(LedSpriteProperty.X, 0)
                    airplane.set(LedSpriteProperty.Y, 0)
                }
            }
            if (missile2) {
                if (missile2.isTouching(airplane)) {
                    game.addScore(1e+50)
                    airplane.set(LedSpriteProperty.X, 0)
                    airplane.set(LedSpriteProperty.Y, 0)
                }
            }
        }
    }
})
basic.forever(function () {
    if (遊戲 == 2) {
        if (game.isRunning()) {
            basic.pause(randint(0, 300))
            airplane.change(LedSpriteProperty.X, 1)
            if (airplane.get(LedSpriteProperty.X) == 4) {
                basic.pause(randint(0, 300))
                airplane.change(LedSpriteProperty.Y, 1)
                airplane.set(LedSpriteProperty.X, 0)
            }
        }
    }
})
basic.forever(function () {
    if (遊戲 == 2) {
        if (game.isRunning()) {
            basic.pause(randint(5000, 10000))
            missile1 = game.createSprite(2, 4)
            missile1.turn(Direction.Right, 45)
            basic.pause(100)
            missile1.move(-1)
            basic.pause(100)
            missile1.move(-1)
            basic.pause(100)
            missile1.turn(Direction.Left, 90)
            missile1.move(1)
            basic.pause(100)
            missile1.move(1)
            basic.pause(100)
            missile1.delete()
        }
    }
})
basic.forever(function () {
    if (遊戲 == 2) {
        if (game.isRunning()) {
            basic.pause(randint(5000, 10000))
            missile2 = game.createSprite(2, 4)
            missile2.turn(Direction.Left, 45)
            basic.pause(100)
            missile2.move(1)
            basic.pause(100)
            missile2.move(1)
            basic.pause(100)
            missile2.turn(Direction.Right, 90)
            missile2.move(-1)
            basic.pause(100)
            missile2.move(-1)
            basic.pause(100)
            missile2.delete()
        }
    }
})
