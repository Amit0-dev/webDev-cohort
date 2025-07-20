const btnContainer = document.querySelector(".btn");
const inputColor = document.getElementById("color");
const createBtn = document.getElementById("createBtn");

function createButton(color) {
  let btnColor = color;
  
  let btn = document.createElement("button");
  btn.innerText = btnColor;
  if (btnColor == "#000000") {
    btn.style.backgroundColor = btnColor;
    btn.style.color = "#ffff";
  }
  btn.style.backgroundColor = btnColor;

  btnContainer.appendChild(btn);

  return function () {
    btn.addEventListener("click", () => {
      const body = document.querySelector("body");
      if (btnColor == "#000000") {
        body.style.color = "#ffff";
      }
      body.style.backgroundColor = btnColor;
    });
  };
}

createBtn.addEventListener("click", () => {
  createButton(inputColor.value)();
});