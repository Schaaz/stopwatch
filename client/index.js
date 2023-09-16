console.log("Hello World!");
var timerObj = document.getElementById("timer")
var startBtnObj = document.getElementById("start-btn")
var resetBtnObj = document.getElementById("reset-btn")
var isTimerRunning = false
var interval
resetBtnObj.addEventListener("click",function(){
    console.log("reset button clicked");
    timerObj.textContent = "00:00";
    
})
startBtnObj.addEventListener("click",()=>{
    console.log("start button clicked");
    if (isTimerRunning){
        startBtnObj.textContent = "Start";
        isTimerRunning = false
        clearInterval(interval)
    } else {
        startBtnObj.textContent="Stop";
        isTimerRunning = true
        interval = setInterval(function(){
            console.log("1 second passed.")
        }, 1000)

    }
    
    
})
