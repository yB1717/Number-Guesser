//GAME VALUES
let min = 1,
    max = 10,
    winningNum = 2,
    guessLeft = 3

//UI ELEMENTS
const game = document.querySelector('#game'),
    minNum = document.querySelector('.min-num'),
    maxNum = document.querySelector('.max-num'),
    guessInput = document.querySelector('#guess-input'),
    guessBtn = document.querySelector('#guess-btn'),
    message = document.querySelector('.message')

minNum.textContent = min
maxNum.textContent = max

guessBtn.addEventListener('click',function(){
    let guess = parseInt(guessInput.value)
    guessBtn.value = 'Submit'
    guessInput.disabled = false
    guessInput.style.borderColor = ''

    if(isNaN(guess) || guess < min || guess > max){
        setMessage(`Please enter a number between ${min} and ${max}`,'red')
    }else{
        if(guess === winningNum){
            gameOver(true,`${winningNum} is correct.YOU WIN!`)

        }else{
            guessLeft = guessLeft - 1
            if(guessLeft > 0){
                guessInput.style.borderColor = 'red'
                guessInput.value = ''
                setMessage(`${guess} is incorrect.You have ${guessLeft} guesses left!`,'red')
            }
            if(guessLeft === 0){
                gameOver(false , `Game is over.YOU LOST! ${winningNum} is the correct answer`)
                guessInput.value = ''
            }
        }
    }
})

function gameOver(won , msg){

    let color
    won === true ? color = 'green' : color = 'red'

    guessInput.disabled = true
    guessInput.style.borderColor = color
    setMessage(msg,color)
    guessBtn.value = 'Play Again'
}

function setMessage(msg,color){
    message.style.color = color
    message.textContent = msg
}

