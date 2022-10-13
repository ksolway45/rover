music.stopAllSounds()
basic.showString("" + (Rover.LightTracing()))
basic.showIcon(IconNames.Duck)
music.setVolume(25)
Rover.MotorRunDual(Rover.LightTracing(), 93)
basic.forever(function () {
    Rover.Move(132)
})
