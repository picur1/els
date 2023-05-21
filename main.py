def on_button_pressed_a():
    basic.show_string("a")
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    basic.show_string("C")
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    basic.show_string("b")
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_logo_touched():
    music.play_sound_effect(music.create_sound_effect(WaveShape.NOISE,
            5000,
            3600,
            255,
            137,
            2000,
            SoundExpressionEffect.NONE,
            InterpolationCurve.LINEAR),
        SoundExpressionPlayMode.UNTIL_DONE)
input.on_logo_event(TouchButtonEvent.TOUCHED, on_logo_touched)

basic.show_icon(IconNames.YES)
basic.show_string("József")

def on_forever():
    pass
basic.forever(on_forever)
