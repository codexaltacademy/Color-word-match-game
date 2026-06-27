const colorWord = document.getElementById('color-word');
const scoreEl = document.getElementById('score');
const timerEl = document.getElementById('timer');

const colors = ['RED','BLUE','GREEN','ORANGE','PURPLE'];

let score = 0;
let  timeLeft = 5;
let timer;
let currentWord = "";
let currentColor = "";

function startGame(){
    score = 0;
    scoreEl.innerText = score;
    nextRound();
}

function nextRound(){
    clearInterval(timer);
    timeLeft = 3;  //3 sec per round
    timerEl.innerText = timeLeft;

    //pick a random word and a random color

    currentWord = colors[Math.floor(Math.random() * colors.length)];
    currentColor = colors[Math.floor(Math.random() * colors.length)];

    colorWord.innerText = currentWord
    colorWord.style.color = currentColor.toLocaleLowerCase();

    timer = setInterval(() =>{
        timeLeft--;
        timerEl.innerText = timeLeft;

        if(timeLeft <=0){
            gameOver();
        }
    },1000)
}

function checkAnswer(isMatchClick){
    const actualMatch =(currentWord === currentColor);

    if(isMatchClick === actualMatch){
        score++;
        scoreEl.innerText = score;
        nextRound();
    }else{
        gameOver();
    }
}

function gameOver(){
    clearInterval(timer);
    alert("Game Over! Score: " + score);
    colorWord.innerText = "READY?";
    colorWord.style.color = "black";
}