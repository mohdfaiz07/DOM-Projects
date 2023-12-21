let randomNumber = parseInt((Math.random()*100 + 1))
const userInput = document.querySelector('#guessField')
const submit = document.querySelector("#sub");
const previousGuesses = document.querySelector('.guesses')
const remainingnGuesses = document.querySelector('.RemainingGuesses')
const printMessage = document.querySelector('.printMessage')
const para = document.createElement('p')
const result = document.querySelector('.result')

let guessArray = [];
let numGuess = 0;
let playGame = true
console.log(randomNumber)

if (playGame){
submit.addEventListener('click', function(e){
    e.preventDefault();
    const guess = userInput.value
    console.log(guess)
    checkNum(guess)
})
}

function checkNum(guess){
    if(guess<0){
       alert('please enter a valid no.')
       userInput.value = ''
    }

    else if(guess>100){
        alert('please enter a valid no.')
        userInput.value = ''
    }
    else if(guess == ""){
        alert('please enter a valid no.')
        userInput.value = ''
    }
    
    else if(isNaN(guess)){
        showMessage(`Please enter a valid no.`)
    }

    else{
        guessArray.push(guess)
        if(numGuess >=10){
            cleanupDIsplay(guess)
            showMessage(`game over the random no. was ${randomNumber}`)
            endGame();
        }
        else{
            cleanupDIsplay(guess)
            checkGuess(guess)
        }

    }
}


function checkGuess(guess){
    if (guess == randomNumber){
        showMessage(`congratulation you won`)
        endGame();

    }

    else{
        if (guess<randomNumber){
            showMessage(`your guess no is tooo low`)
         }
       
        else if (guess>randomNumber){
            showMessage(`your guess no is tooo high`)
         }
    }

}


function showMessage(message){
printMessage.innerHTML = `<h1> ${message}</h1>`

}

function cleanupDIsplay(guess){
document.querySelector('#guessField').value = '';
previousGuesses.innerHTML += `${guess},`;
remainingnGuesses.innerHTML = `${10 - numGuess}`
numGuess++

}

function endGame(){
userInput.value = '';
userInput.setAttribute('disabled', '');
submit.setAttribute('disabled', '');
para.classList.add('button');
para.innerHTML = `<h5 id = 'newGame'>start new  game </h5>`
result.appendChild(para);
playGame = false;
startGame()

}

function startGame (){
        const newGamebutton = document.querySelector('#newGame')
        newGamebutton.addEventListener( 'click', function(){
        userInput.removeAttribute('disabled')
        submit.removeAttribute('disabled')
        remainingnGuesses.innerHTML = `10`
        guessArray = [];
        numGuess = 0;
        previousGuesses.innerHTML = "";
        playGame = true
        randomNumber = parseInt((Math.random()*100 + 1))
        result.removeChild(para);
        showMessage('')

    } )

    

}


