let button = document.getElementById("button");
let count = 0;
button.addEventListener("click", (event) => {
  event.preventDefault();
  createElem();
});

button.addEventListener("contextmenu", (event) => {
  event.preventDefault();
  delElem();
});

document.body.addEventListener("keydown", (event) => {
  if (event.key === "Backspace") {
    while (count != 0) {
      delElem();
    }
  } else if (event.code === "ShiftLeft") {
    delElem();
  } else if (event.code === "ShiftRight") {
    createElem();
  } else if (event.code === "ArrowRight") {
    for (let i = 0; i < 5; i++) {
      createElem();
    }
  } else if (event.code === "ArrowLeft") {
    for (let i = 0; i < 5; i++) {
      delElem();
    }
  }
});

function delElem() {
  if (count == 0) {
    return false;
  }
  let elem = document.body.lastChild;
  count--;
  document.body.removeChild(elem);
}

function createElem() {
  count++;
  let new_elem = document.createElement("div");
  new_elem.innerHTML = `<p>${count}</p>`;
  new_elem.style.fontSize = 32 + "px";
  new_elem.classList.add("main_elem");
  document.body.append(new_elem);
}
