let num = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');

const prev = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver =  document.querySelector('.resultParas');

const para = document.createElement('p');

let prevGuess = []
let numGuess = 1;

let play = true;

if(play){
    submit.addEventListener('click', function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    });
}

function validateGuess(guess){
    if(isNaN(guess) || guess < 1 || guess > 100){
        alert('Please enter a valid Number!');
    }else{
        prevGuess.push(guess);
        if(numGuess === 10){
            displayGuess(guess);
            displayMessage(`Game Over. The Number was ${num}`);
            endGame();
        }else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess){
    if(guess === num){
        displayMessage(`You guessed it Right!`);
        endGame();
    }else if(guess < num){
        displayMessage(`Number is TOO Low`);
    }else{
        displayMessage(`Number is TOO High`);
    }
}

function displayGuess(guess){
    userInput.value = '';
    prev.innerHTML += `${guess} `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    para.classList.add('button');
    para.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
    startOver.appendChild(para);
    play = false;
    newGame();
}

function newGame(){
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function(e){
        num = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        numGuess = 1;
        prev.innerHTML = '';
        remaining.innerHTML = `${11 - numGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(para);
        lowOrHi.innerHTML = '';

        play = true;
    });
}