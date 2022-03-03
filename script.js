

function computerPlay() {
    const a = Math.floor(Math.random() * 3);
    if (a == 0) {
        return('rock');
    }
    if (a == 1) {
        return('paper');
    }
    if (a == 2) {
        return('scissors');
    }
}

function round(player) {
    const sentence = document.getElementById('sentence');
    const winner = document.getElementById('winner');
    const counter = document.getElementById('counter');
    const computer = computerPlay();
    
    sentence.textContent = 'Computer chose ' + computer;

    if (player === computer) {
        winner.textContent = ('You both chose ' + player + ', tie!')
    }
    else if (player === 'rock' && computer === 'scissors') {
        winner.textContent = ('Rock beats scissors, you win!')
        counter.textContent = (parseInt(counter.textContent) + 1).toString();
    }
    else if (player === 'paper' && computer === 'rock') {
        winner.textContent = ('Paper beats rock, you win!')
        counter.textContent = (parseInt(counter.textContent) + 1).toString();
    }
    else if (player === 'scissors' && computer === 'paper') {
        winner.textContent = ('Scissors beat paper, you win!')
        counter.textContent = (parseInt(counter.textContent) + 1).toString();
    }
    else if (player === 'scissors' && computer === 'rock') {
        winner.textContent = ('Rock beats scissors, computer wins!')
        counter.textContent = (parseInt(counter.textContent) - 1).toString();
    }
    else if (player === 'rock' && computer === 'paper') {
        winner.textContent = ('Paper beats rock, computer wins!')
        counter.textContent = (parseInt(counter.textContent) - 1).toString();
    }
    else if (player === 'paper' && computer === 'scissors') {
        winner.textContent = ('Scissors beat paper, computer wins!')
        counter.textContent = (parseInt(counter.textContent) - 1).toString();
    }
}