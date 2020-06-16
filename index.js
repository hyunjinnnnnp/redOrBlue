const randomColor = document.querySelector(".js-randomColor"),
  choiceWrapper = document.querySelector(".js-choiceWrapper"),
  leftInput = document.querySelector(".js-choiceLeft"),
  rightInput = document.querySelector(".js-choiceRight"),
  upInput = document.querySelector(".js-choiceUp"),
  downInput = document.querySelector(".js-choiceDown"),
  result = document.querySelector(".result"),
  countWin = document.querySelector(".win"),
  countLose = document.querySelector(".lose"),
  correctPop = document.querySelectorAll(".js-correctPop");

randomNum = new Object();

const correctPopArray = [];

correctPop.forEach((obj) => {
  correctPopArray.push(obj);
});

let winScore = 0,
  loseScore = 0;

//콤보 연속적으로 correct면 PERFECT!

//윈 늘어날 수록 원 크기 커진다
//색깔은 가장 많이 맞춘 색?

function correctPopDefault() {
  correctPopArray.forEach((CP) => {
    CP.classList.remove("showing");
  });
}
function drawCountWin() {
  countWin.innerHTML = winScore;
}
function drawCountLose() {
  countLose.innerHTML = loseScore;
}
function handleLeftClick(event) {
  if (randomNum.value === 1) {
    result.innerHTML = "correct";
    winScore = winScore + 1;
    drawCountWin();
    correctPopArray[0].classList.add("showing");
  } else {
    result.innerHTML = "fail";
    loseScore = loseScore + 1;
    drawCountLose();
  }
}

function handleRightClick(event) {
  if (randomNum.value === 2) {
    result.innerHTML = "correct";
    winScore = winScore + 1;
    drawCountWin();
    correctPopArray[1].classList.add("showing");
  } else {
    result.innerHTML = "fail";
    loseScore = loseScore + 1;
    drawCountLose();
  }
}
function handleUpClick(event) {
  if (randomNum.value === 3) {
    result.innerHTML = "correct";
    winScore = winScore + 1;
    drawCountWin();
    correctPopArray[2].classList.add("showing");
  } else {
    result.innerHTML = "fail";
    loseScore = loseScore + 1;
    drawCountLose();
  }
}
function handleDownClick(event) {
  if (randomNum.value === 4) {
    result.innerHTML = "correct";
    winScore = winScore + 1;
    drawCountWin();
    correctPopArray[3].classList.add("showing");
  } else {
    result.innerHTML = "fail";
    loseScore = loseScore + 1;
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
  setInterval(correctPopDefault, 9000);
  paintDefaultColor();
  drawCountWin();
  drawCountLose();
}
init();
