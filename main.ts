input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Giraffe)
    basic.showString("Eszter")
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Cow)
    basic.showString("DANI")
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Heart)
    basic.showString("Eszter")
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    basic.showString("cat")
    music.playSoundEffect(music.createSoundEffect(WaveShape.Noise, 5000, 1, 255, 230, 2000, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
    basic.showIcon(IconNames.Asleep)
})
music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 107, 1176, 255, 244, 2000, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
basic.showIcon(IconNames.EigthNote)
basic.showString("Eszter")
