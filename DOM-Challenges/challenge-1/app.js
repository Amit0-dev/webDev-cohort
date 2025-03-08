const toggleButton = document.getElementById("toggleButton")
const bulb = document.getElementById("bulb")
const switchStatus = document.getElementById("status")
const body = document.getElementById("body")


document.addEventListener("DOMContentLoaded",()=>{
    if(switchStatus.innerText == "Status: Off"){
        body.classList.add("dark-mode")
    }
})

toggleButton.addEventListener("click",()=>{
    if(bulb.classList.value.includes("off")){
        bulb.classList.remove("off")
        bulb.classList.add("on")
        toggleButton.innerText = "Turn Off"
        switchStatus.innerText = "Status: On"
        body.classList.remove("dark-mode")
    }else{
        bulb.classList.remove("on")
        bulb.classList.add("off")
        toggleButton.innerText = "Turn On"
        switchStatus.innerText = "Status: Off"
        body.classList.add("dark-mode")

    }
})