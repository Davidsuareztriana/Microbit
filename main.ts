input.onGesture(Gesture.FreeFall, function () {
    basic.showLeds(`
        . # . # .
        . . . . .
        . # # # .
        # . . . #
        . # # # .
        `)
    basic.pause(100)
    basic.showLeds(`
        . # . # .
        . . . . .
        . . . . .
        . # # # .
        . . . . .
        `)
})
input.onGesture(Gesture.TiltLeft, function () {
    basic.showLeds(`
        . # . # .
        . . . . .
        # # # # #
        # # # . .
        # . . . .
        `)
})
input.onGesture(Gesture.TiltRight, function () {
    basic.showLeds(`
        . # . # .
        . . . . .
        # # # # #
        . . # # #
        . . . . #
        `)
    basic.pause(500)
    basic.showLeds(`
        # . # . .
        . . . . .
        # # # # #
        . . # # #
        . . . . #
        `)
    basic.pause(500)
    basic.showLeds(`
        . # . # .
        . . . . .
        # # # # #
        . . # # #
        . . . . #
        `)
    basic.clearScreen()
})
