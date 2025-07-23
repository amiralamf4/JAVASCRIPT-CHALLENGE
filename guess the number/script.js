let randomNumber = parseInt(Math.random()*100+1);
console.log(randomNumber);

// const body = document.querySelector('body')
const userInput= document.querySelector('#guessField');
const submit= document.querySelector('#subt');
const guessSlot= document.querySelector('.guesses');
const remaining= document.querySelector('.lastResult');
const lowHi= document.querySelector('.loworhi');
const startOver= document.querySelector('.resultParas');

const p= document.createElement('p');

let preGuess =[];
let numGuess =1;

let playGame= true;
let intervalId;
const randomColor = function () {
    const hex='0123456789ABCDEF';
    let color='#';
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random()*16)];        
    }
    return color;
}
console.log(randomColor());
intervalId = setInterval(changeColor,1000);

function changeColor() {
    document.body.style.background=randomColor();
}
    

    document.body.style.background=randomColor();


if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess= parseInt(userInput.value);
        validateGuess(guess)
    });
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('Please enter a valid number')
    } else if (guess<1) {
        alert('Please enter number more than 1')
    }else if (guess>100) {
        alert('Please enter number less than 100')
    }else{
        preGuess.push(guess)
        if (numGuess==10) {
            displayGuess(guess)
            displayMessage(`Game Over. Random number was ${randomNumber}`)
            endGame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {
    if (guess == randomNumber) {
        displayMessage('You guessed right')
        endGame()
    }else if (guess < randomNumber) {
        displayMessage(`Number is too low`)
    }else if(guess > randomNumber) {
        displayMessage('Number is too hight')
    }
}

function displayGuess(guess) {
    userInput.value=''
    guessSlot.innerHTML +=`${guess} `
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`
}
function displayMessage(message) {
    lowHi.innerHTML = `<p>${message}</p>`;
}

function endGame() {
    userInput.value=''
    // userInput.setAttribute('disabled','');
    submit.setAttribute('disabled','')
    p.classList.add('button');
    p.innerHTML='<p id="newGame"> Start a new game</p>';
    startOver.appendChild(p)
    playGame=false;
    clearInterval(intervalId);
    intervalId=null;
    randomNumber=''
    newGame()
}

function newGame() {
   const newBtn = document.querySelector('#newGame');
    newBtn.addEventListener('click', function (e) {
        randomNumber = parseInt(Math.random()*100+1);
        preGuess=[];
        guessSlot.innerHTML=''
        numGuess ='';
        remaining.innerHTML = `${11 - numGuess}`;
        // userInput.removeAttribute('disabled');
        submit.removeAttribute('disabled');
        startOver.removeChild(p);
        intervalId = setInterval(changeColor,1000);
        playGame= true;
    })
}


