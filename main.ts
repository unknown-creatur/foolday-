input.onGesture(Gesture.TiltLeft, function () {
    _2p.change(LedSpriteProperty.X, -1)
})
input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    判斷 = 1
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
})
input.onGesture(Gesture.ScreenDown, function () {
    basic.showString("" + input.temperature() + "C")
})
input.onButtonPressed(Button.A, function () {
    _1p.change(LedSpriteProperty.X, -1)
})
input.onGesture(Gesture.ScreenUp, function () {
    if (判斷 == 1) {
    	
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
        if (input.lightLevel() >= 128) {
            basic.showString("It's 11:00 p.m. ,You should go to bed right now!")
        } else {
            if (input.isGesture(Gesture.Shake)) {
                if (input.temperature() >= 100) {
                    basic.showString("Maybe it will snow ")
                } else if (input.temperature() <= 0) {
                    basic.showString("It's hot, right?")
                } else if (input.temperature() < 100 && input.temperature() > 0) {
                    for (let index = 0; index < 10; index++) {
                        basic.showString("" + randint(1, 99) + "C")
                        basic.pause(100)
                    }
                    basic.showString("oh...the temperature changes quickly...the weather is anomaly")
                    while (input.isGesture(Gesture.ScreenUp)) {
                        basic.showString("" + randint(1, 99) + "C")
                        basic.pause(100)
                    }
                }
            }
        }
        判斷 = 1
    }
})
input.onButtonPressed(Button.B, function () {
    _1p.change(LedSpriteProperty.X, 1)
})
input.onGesture(Gesture.TiltRight, function () {
    _2p.change(LedSpriteProperty.X, 1)
})
let _1p: game.LedSprite = null
let airplane: game.LedSprite = null
let 判斷 = 0
let _2p: game.LedSprite = null
basic.showString("" + input.temperature() + "C")
basic.forever(function () {
	
})
basic.forever(function () {
    basic.pause(randint(0, 300))
    airplane.change(LedSpriteProperty.X, 1)
    if (airplane.get(LedSpriteProperty.X) == 4) {
        basic.pause(randint(0, 300))
        airplane.change(LedSpriteProperty.Y, 1)
        airplane.set(LedSpriteProperty.X, 0)
    }
})
basic.forever(function () {
    if (airplane.isTouching(_1p) || airplane.isTouching(_2p)) {
        game.gameOver()
    }
})
basic.forever(function () {
    if (game.isGameOver()) {
    	
    } else {
        let missile2: game.LedSprite = null
        let missile1: game.LedSprite = null
        let bullet5: game.LedSprite = null
        let bullet4: game.LedSprite = null
        let bullet3: game.LedSprite = null
        let bullet2: game.LedSprite = null
        let bullet1: game.LedSprite = null
        if (bullet1.isTouching(airplane)) {
            game.addScore(1e+50)
            airplane.set(LedSpriteProperty.X, 0)
            airplane.set(LedSpriteProperty.Y, 0)
        }
        if (bullet2.isTouching(airplane)) {
            game.addScore(1e+50)
            airplane.set(LedSpriteProperty.X, 0)
            airplane.set(LedSpriteProperty.Y, 0)
        }
        if (bullet3.isTouching(airplane)) {
            game.addScore(1e+50)
            airplane.set(LedSpriteProperty.X, 0)
            airplane.set(LedSpriteProperty.Y, 0)
        }
        if (bullet4.isTouching(airplane)) {
            game.addScore(1e+50)
            airplane.set(LedSpriteProperty.X, 0)
            airplane.set(LedSpriteProperty.Y, 0)
        }
        if (bullet5.isTouching(airplane)) {
            game.addScore(1e+50)
            airplane.set(LedSpriteProperty.X, 0)
            airplane.set(LedSpriteProperty.Y, 0)
        }
        if (missile1.isTouching(airplane)) {
            game.addScore(1e+50)
            airplane.set(LedSpriteProperty.X, 0)
            airplane.set(LedSpriteProperty.Y, 0)
        }
        if (missile2.isTouching(airplane)) {
            game.addScore(1e+50)
            airplane.set(LedSpriteProperty.X, 0)
            airplane.set(LedSpriteProperty.Y, 0)
        }
    }
})
