const play_btn = document.querySelector('.play')
const pause_btn = document.querySelector('.pause')
const stop_btn = document.querySelector('.stop')
const set_btn = document.querySelector('.set')
const soundOn_btn = document.querySelector('.sound-on')
const soundOff_btn = document.querySelector('.sound-off')

function hideAndShow(hide, show, secondeHide, secondShow){
    hide.classList.add('hide')
    show.classList.remove('hide')

    if (secondeHide && secondShow){
        secondeHide.classList.add('hide')
        secondShow.classList.remove('hide')
    }
    
}

play_btn.addEventListener('click', () => {
    hideAndShow(play_btn, pause_btn, set_btn, stop_btn)
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