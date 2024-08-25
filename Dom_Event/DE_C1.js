// Initial values
let score = 0;
let secretNumberInit = '?';
let secretNumber = Math.trunc(Math.random() * 10) + 1;
document.querySelector('.score').textContent = score;
document.querySelector('.number').textContent = secretNumberInit;

let checkNum = 0;
document.querySelector('.check').addEventListener('click', function () {
    checkNum = checkNum + 1;
});

document.querySelector('.check').addEventListener('click', function () {
    
    const guess = Number(document.querySelector('.guess').value);
    if(guess == secretNumber){
        document.querySelector('.mess').textContent = 'correct number!!!';
        document.querySelector('.number').textContent = secretNumber;
        if(checkNum == 1){
            document.querySelector('.score').textContent = 4;
        }else if(checkNum == 2){
            document.querySelector('.score').textContent = 3;
        }else if(checkNum == 3){
            document.querySelector('.score').textContent = 2;
        }else if(checkNum > 3){
            document.querySelector('.score').textContent = 1;
        }
        
    }else if(guess > secretNumber){
        document.querySelector('.mess').textContent = 'too high!!!';
    }else if(guess < secretNumber){
        document.querySelector('.mess').textContent = 'too low!!!';
    }
});

// Select the element with the 'again' class and attach a click event handler
document.querySelector('.again').addEventListener('click', function () {
    // restore initial values of the 'score' and 'secretNumber' variables
    score = 0;
    checkTime = 0;
    secretNumber = Math.trunc(Math.random() * 10) + 1;

    // Restore the initial conditions of the message, number, score and guess input fields
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = secretNumberInit;
    document.querySelector('.guess').value = '';

    // Restore the original message
    document.querySelector('.mess').textContent = 'lets guess!!!';

    // Restore the original styles
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});
