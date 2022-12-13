import Sounds from "./sounds.js"

export default function Timer({
    minutesDisplay,
    secondsDisplay,
    hideAndShow,
    stop_btn, 
    set_btn, 
    pause_btn, 
    play_btn,
    body
}){
    let timerTimeout

    function countDown(initialMinutes, initialSeconds){
        timerTimeout = setTimeout(() => {
            let seconds = Number(secondsDisplay.textContent)
            let minutes = Number(minutesDisplay.textContent)

            Sounds().bgAudio.play()
    
            if (seconds <= 0){
                seconds = 60
    
                minutesDisplay.textContent = minutesDisplay.textContent <= 10 ? String(minutes - 1).padStart(2, '0') : minutes - 1
            }
    
            secondsDisplay.textContent = secondsDisplay.textContent <= 10 ? String(seconds - 1).padStart(2, '0') : seconds - 1
            
            if (minutesDisplay.textContent <= 0 && secondsDisplay.textContent <= 0){
                Sounds().bgAudio.pause()
                hideAndShow(stop_btn, set_btn, pause_btn, play_btn)
                updateTimer(initialMinutes, initialSeconds)
                Sounds().finalButton()
                body.style.backgroundColor = "#2a2aaa"
                return 
            }
    
            countDown(initialMinutes, initialSeconds)
        }, 1000)
    }
    
    function updateTimer(initialMinutes, initialSeconds){
        minutesDisplay.textContent = String(initialMinutes).padStart(2, '0')
        secondsDisplay.textContent = String(initialSeconds).padStart(2, '0')
    }

    function hold(){
        clearTimeout(timerTimeout)
    }

    return {
        countDown,
        updateTimer,
        hold
    }
    
}


