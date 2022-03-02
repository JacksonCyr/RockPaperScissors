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

function round() {
    const computer = computerPlay();
    const inputChoice = prompt('Enter rock paper or scissors').toLowerCase();
    let player = null;
    player = inputChoice;
    alert('Computer chose ' + computer);
    if (player === computer) {
        alert('You both chose ' + player + ', tie!')
    }
    else if (player === 'rock' && computer === 'scissors') {
        alert('Rock beats scissors, you win!')
    }
    else if (player === 'paper' && computer === 'rock') {
        alert('Paper beats rock, you win!')
    }
    else if (player === 'scissors' && computer === 'paper') {
        alert('Scissors beat paper, you win!')
    }
    else if (player === 'scissors' && computer === 'rock') {
        alert('Rock beats scissors, computer wins!')
    }
    else if (player === 'rock' && computer === 'paper') {
        alert('Paper beats rock, computer wins!')
    }
    else if (player === 'paper' && computer === 'scissors') {
        alert('Scissors beat paper, computer wins!')
    }
}