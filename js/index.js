import Controls from "./controls.js"
import Timer from "./timer.js"
import Sounds from "./sounds.js"
import {
    play_btn,
    pause_btn,
    stop_btn,
    set_btn,
    soundOn_btn,
    soundOff_btn,
    minutesDisplay,
    secondsDisplay,
    body
} from "./elements.js"



let initialMinutes, initialSeconds

const sounds = Sounds()
const controls = Controls()

const timer = Timer({
    minutesDisplay,
    secondsDisplay,
    hideAndShow: controls.hideAndShow,
    stop_btn, 
    set_btn, 
    pause_btn, 
    play_btn,
    body
 }
)


play_btn.addEventListener('click', () => {
    if(minutesDisplay.textContent != '00' || secondsDisplay.textContent != '00'){
        body.style.backgroundColor = "#355a37"
        sounds.pressButton()
        controls.hideAndShow(play_btn, pause_btn, set_btn, stop_btn)
        timer.countDown(initialMinutes, initialSeconds)
    } 
})

pause_btn.addEventListener('click', () => {
    controls.hideAndShow(pause_btn, play_btn)
    sounds.pressButton()
    timer.hold()
})

stop_btn.addEventListener('click', () => {
    sounds.pressButton()
    controls.hideAndShow(stop_btn, set_btn, pause_btn, play_btn)
    timer.updateTimer(initialMinutes,initialSeconds)
    timer.hold()
})

soundOn_btn.addEventListener('click', () => {
    controls.hideAndShow(soundOn_btn, soundOff_btn)
    sounds.bgAudio.play()
})

soundOff_btn.addEventListener('click', () => {
    body.style.backgroundColor = "#2a2aaa";
    controls.hideAndShow(soundOff_btn, soundOn_btn)
    sounds.bgAudio.pause()
})

set_btn.addEventListener('click', () => {
    initialMinutes = prompt('Quantos minutos? ')
    initialSeconds = prompt('Quantos segundos? ')

    initialMinutes && initialSeconds ? timer.updateTimer(initialMinutes, initialSeconds) : alert('Digite minutos e segundos')
    
    if (initialMinutes && initialSeconds){
        timer.updateTimer(initialMinutes, initialSeconds)
    }
})