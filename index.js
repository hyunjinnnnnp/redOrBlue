const randomColor= document.querySelector(".js-randomColor"),
choiceWrapper=document.querySelector(".js-choiceWrapper"),
leftInput=document.querySelector(".js-choiceLeft"),
rightInput=document.querySelector(".js-choiceRight"),
upInput= document.querySelector(".js-choiceUp"),
downInput=document.querySelector(".js-choiceDown"),
result=document.querySelector(".result"),
countWin =document.querySelector(".win"),
countLose=document.querySelector(".lose");


randomNum = new Object;

function handleUpClick(event){
    if(randomNum.value===3){
        result.innerHTML="correct"
        
    }else{
        result.innerHTML="fail"
    }
}
function handleDownClick(event){
 if(randomNum.value ===4){
     result.innerHTML = "correct"
 }else{
     result.innerHTML = "fail"
 }
}
function handleRightClick(event){
if(randomNum.value===1){
result.innerHTML="correct"
}else{
    result.innerHTML ="fail"
}
}
function handleLeftClick(event){
    if(randomNum.value === 0){
      result.innerHTML = 'correct'
    }else{
        console.log('fail')
        result.innerHTML="fail"
    }
}
//value가 0일 때 왼쪽을 클릭하면 --> right! keep going
//1일 때 오른쪽을 클릭하면 -->  right keep going

//0일 때 오른쪽클릭 or 1일 때 왼쪽 클릭 --> 게임 오버


function paintRandomColor(){
    const random=Math.floor(Math.random() * 4);
    if(random === 0){
        randomColor.classList.remove("choiceColor2");
        randomColor.classList.remove("choiceColor3");
        randomColor.classList.remove("choiceColor4");
        randomColor.classList.add("choiceColor1");
        randomNum={value: 0};

    }else if(random === 1){
        randomColor.classList.remove("choiceColor1");
        randomColor.classList.remove("choiceColor3");
        randomColor.classList.remove("choiceColor4");
        randomColor.classList.add("choiceColor2");
        randomNum={value:1};
    }else if(random === 2){
        randomColor.classList.remove("choiceColor1");
        randomColor.classList.remove("choiceColor2");
        randomColor.classList.remove("choiceColor4");
        randomColor.classList.add("choiceColor3");
        randomNum={value: 3};
    }else if(random ===3){
        randomColor.classList.remove("choiceColor1");
        randomColor.classList.remove("choiceColor2");
        randomColor.classList.remove("choiceColor4");
        randomColor.classList.add("choiceColor3");
        randomNum={value: 4};
    }
    console.log(randomNum)
    rightInput.addEventListener('click', handleRightClick);
    leftInput.addEventListener('click', handleLeftClick);
    upInput.addEventListener('click', handleUpClick);
    downInput.addEventListener("click", handleDownClick);
    //value가 0일 때 왼쪽을 클릭하면 --> right! keep going
    //1일 때 오른쪽을 클릭하면 -->  right keep going

    //0일 때 오른쪽클릭 or 1일 때 왼쪽 클릭 --> 게임 오버
}


function paintDefaultColor(){
    leftInput.classList.add("choiceColor1");
    rightInput.classList.add("choiceColor2");
    upInput.classList.add("choiceColor3"),
    downInput.classList.add("choiceColor4")
    randomColor.classList.add("defaultColor");
}
function init(){
    setInterval(paintRandomColor, 1000);
    paintDefaultColor();
    
}
init();