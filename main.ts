input.onGesture(Gesture.TiltLeft, function () {
	
})
input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
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
	
})
input.onGesture(Gesture.Shake, function () {
	
})
input.onButtonPressed(Button.AB, function () {
	
})
input.onButtonPressed(Button.B, function () {
	
})
input.onGesture(Gesture.TiltRight, function () {
	
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    判斷 = 1
})
let 判斷 = 0
basic.showString("Hello!")
判斷 = 0
basic.forever(function () {
	
})
basic.forever(function () {
	
})
basic.forever(function () {
	
})
basic.forever(function () {
	
})
basic.forever(function () {
	
})
