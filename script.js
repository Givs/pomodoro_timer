const play_btn = document.querySelector('.play')
const pause_btn = document.querySelector('.pause')
const stop_btn = document.querySelector('.stop')
const set_btn = document.querySelector('.set')
const soundOn_btn = document.querySelector('.sound-on')
const soundOff_btn = document.querySelector('.sound-off')
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')

let minutes

function hideAndShow(hide, show, secondeHide, secondShow){
    hide.classList.add('hide')
    show.classList.remove('hide')

    if (secondeHide && secondShow){
        secondeHide.classList.add('hide')
        secondShow.classList.remove('hide')
    }
    
}

function countDown(){
    setTimeout(() => {
        let seconds = Number(secondsDisplay.textContent)
        let minutes = Number(minutesDisplay.textContent)

        if (seconds <= 0){
            seconds = 60

            minutesDisplay.textContent = minutesDisplay.textContent <= 10 ? String(minutes - 1).padStart(2, '0') : minutes - 1
        }

        secondsDisplay.textContent = secondsDisplay.textContent <= 10 ? String(seconds - 1).padStart(2, '0') : seconds - 1
        
        if (minutesDisplay.textContent <= 0 && secondsDisplay.textContent <= 0){
            hideAndShow(stop_btn, set_btn, pause_btn, play_btn)
            return 
        }

        countDown()
    }, 1000)
}

play_btn.addEventListener('click', () => {
    if(minutesDisplay.textContent != '00' || secondsDisplay.textContent != '00'){
        hideAndShow(play_btn, pause_btn, set_btn, stop_btn)
        countDown()
    } 
})

pause_btn.addEventListener('click', () => {
    hideAndShow(pause_btn, play_btn)
})

stop_btn.addEventListener('click', () => {
    hideAndShow(stop_btn, set_btn, pause_btn, play_btn)
})

soundOn_btn.addEventListener('click', () => {
    hideAndShow(soundOn_btn, soundOff_btn)
})

soundOff_btn.addEventListener('click', () => {
    hideAndShow(soundOff_btn, soundOn_btn)
})

set_btn.addEventListener('click', () => {
    minutes = prompt('Quantos minutos? ')
    if (minutes){
        minutesDisplay.textContent = String(minutes).padStart(2, '0')
    }
})