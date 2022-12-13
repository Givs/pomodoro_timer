import Controls from "./controls.js"
import Timer from "./timer.js"

const play_btn = document.querySelector('.play')
const pause_btn = document.querySelector('.pause')
const stop_btn = document.querySelector('.stop')
const set_btn = document.querySelector('.set')
const soundOn_btn = document.querySelector('.sound-on')
const soundOff_btn = document.querySelector('.sound-off')
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
const body = document.querySelector('body');




let initialMinutes, initialSeconds

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
    body.style.backgroundColor = "#355a37"
    if(minutesDisplay.textContent != '00' || secondsDisplay.textContent != '00'){
        controls.hideAndShow(play_btn, pause_btn, set_btn, stop_btn)
        timer.countDown(initialMinutes, initialSeconds)
    } 
})

pause_btn.addEventListener('click', () => {
    controls.hideAndShow(pause_btn, play_btn)
    timer.hold()
})

stop_btn.addEventListener('click', () => {
    controls.hideAndShow(stop_btn, set_btn, pause_btn, play_btn)
    timer.updateTimer(initialMinutes,initialSeconds)
    timer.hold()
})

soundOn_btn.addEventListener('click', () => {
    controls.hideAndShow(soundOn_btn, soundOff_btn)
})

soundOff_btn.addEventListener('click', () => {
    controls.hideAndShow(soundOff_btn, soundOn_btn)
})

set_btn.addEventListener('click', () => {
    initialMinutes = prompt('Quantos minutos? ')
    initialSeconds = prompt('Quantos segundos? ')

    initialMinutes && initialSeconds ? timer.updateTimer(initialMinutes, initialSeconds) : alert('Digite minutos e segundos')
    
    if (initialMinutes && initialSeconds){
        timer.updateTimer(initialMinutes, initialSeconds)
    }
})