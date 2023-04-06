input.onGesture(Gesture.ScreenDown, function () {
    basic.showString("" + input.temperature() + "C")
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
let 判斷 = 0
basic.showString("" + input.temperature() + "C")
basic.forever(function () {
	
})
