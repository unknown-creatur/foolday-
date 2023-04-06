input.onGesture(Gesture.ScreenDown, function () {
    basic.showString("" + input.temperature() + "C")
})
input.onGesture(Gesture.ScreenUp, function () {
    if (input.lightLevel() > 50) {
        basic.showString("You should go to bed right now!")
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
})
basic.showString("" + input.temperature() + "C")
basic.forever(function () {
	
})
