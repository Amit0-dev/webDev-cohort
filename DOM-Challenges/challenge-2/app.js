const colorButtons = document.querySelector(".color-buttons")
const mainHeading = document.getElementById("mainHeading")

colorButtons.addEventListener("click",(e)=>{
    if(e.target.tagName == "BUTTON"){
        if(e.target.innerText == "Reset"){
            mainHeading.style.color = "black"
        }
        mainHeading.style.color = e.target.innerText
    }
})