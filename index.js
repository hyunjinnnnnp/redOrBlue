const randomColor = document.querySelector(".js-randomColor"),
  choiceWrapper = document.querySelector(".js-choiceWrapper"),
  leftInput = document.querySelector(".js-choiceLeft"),
  rightInput = document.querySelector(".js-choiceRight"),
  upInput = document.querySelector(".js-choiceUp"),
  downInput = document.querySelector(".js-choiceDown"),
  result = document.querySelector(".result"),
  countWin = document.querySelector(".win"),
  countLose = document.querySelector(".lose");

randomNum = new Object();

let win = 0,
  lose = 0;

function drawCountWin() {
  countWin.innerHTML = win;
}
function drawCountLose() {
  countLose.innerHTML = lose;
}
function handleLeftClick(event) {
  if (randomNum.value === 1) {
    result.innerHTML = "correct";
    win = win + 1;
    drawCountWin();
  } else {
    console.log("fail");
    result.innerHTML = "fail";
    lose = lose + 1;
    drawCountLose();
  }
}

function handleRightClick(event) {
  if (randomNum.value === 2) {
    result.innerHTML = "correct";
    win = win + 1;
    drawCountWin();
  } else {
    result.innerHTML = "fail";
    lose = lose + 1;
    drawCountLose();
  }
}
function handleUpClick(event) {
  if (randomNum.value === 3) {
    result.innerHTML = "correct";
    win = win + 1;
    drawCountWin();
  } else {
    result.innerHTML = "fail";
    lose = lose + 1;
    drawCountLose();
  }
}
function handleDownClick(event) {
  if (randomNum.value === 4) {
    result.innerHTML = "correct";
    win = win + 1;
    drawCountWin();
  } else {
    result.innerHTML = "fail";
    lose = lose + 1;
    drawCountLose();
  }
}

function paintRandomColor() {
  const random = Math.floor(Math.random() * 4) + 1;
  if (random === 1) {
    randomColor.classList.remove("choiceColor2");
    randomColor.classList.remove("choiceColor3");
    randomColor.classList.remove("choiceColor4");
    randomColor.classList.add("choiceColor1");
    randomNum = { value: 1 };
  } else if (random === 2) {
    randomColor.classList.remove("choiceColor1");
    randomColor.classList.remove("choiceColor3");
    randomColor.classList.remove("choiceColor4");
    randomColor.classList.add("choiceColor2");
    randomNum = { value: 2 };
  } else if (random === 3) {
    randomColor.classList.remove("choiceColor1");
    randomColor.classList.remove("choiceColor2");
    randomColor.classList.remove("choiceColor4");
    randomColor.classList.add("choiceColor3");
    randomNum = { value: 3 };
  } else if (random === 4) {
    randomColor.classList.remove("choiceColor1");
    randomColor.classList.remove("choiceColor2");
    randomColor.classList.remove("choiceColor3");
    randomColor.classList.add("choiceColor4");
    randomNum = { value: 4 };
  }
  rightInput.addEventListener("click", handleRightClick);
  leftInput.addEventListener("click", handleLeftClick);
  upInput.addEventListener("click", handleUpClick);
  downInput.addEventListener("click", handleDownClick);
}

function paintDefaultColor() {
  leftInput.classList.add("choiceColor1");
  rightInput.classList.add("choiceColor2");
  upInput.classList.add("choiceColor3"),
    downInput.classList.add("choiceColor4");
  randomColor.classList.add("defaultColor");
}
function init() {
  setInterval(paintRandomColor, 1000);
  paintDefaultColor();
  drawCountWin();
  drawCountLose();
}
init();
