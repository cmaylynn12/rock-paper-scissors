function computerPlay() {

    let availableMoves = ['Rock', 'Paper', 'Scissors']
    let computerMove = availableMoves[Math.floor(Math.random() * 3)];
    
    return computerMove
}

function playRound(playerMove, computerMove) {

    let message = "";
    let winner = "";
    
    if (playerMove.toLowerCase() === computerMove.toLowerCase()) {
        message = 'It\'s a tie!'
    
    } else if (playerMove.toLowerCase() === 'rock' && computerMove.toLowerCase() === 'scissors') {
        message = 'You win! Rock beats Scissors';
        winner = 'player';

    } else if (playerMove.toLowerCase() === 'scissors' && computerMove.toLowerCase() === 'paper') {
        message = 'You win! Scissors beats Paper';
        winner = 'player';

    } else if (playerMove.toLowerCase() === 'paper' && computerMove.toLowerCase() === 'rock') {
        message = 'You win! Paper beats Rock';
        winner = 'player';

    } else {
        message = `You lose! ${computerMove.charAt(0).toUpperCase() + computerMove.slice(1).toLowerCase()} beats ${playerMove.charAt(0).toUpperCase() + playerMove.slice(1).toLowerCase()}`
        winner = 'computer';
    }

    console.log(message)
    return winner;
}

function game() {
    // let rounds = 5;
    // let playerPoints = 0;
    // let computerPoints = 0;
    
    // for (let i = 1; i <= rounds; i++) {
    //     playerMove = prompt("Please enter a move: ");
    //     computerMove = computerPlay();

    //     winner = playRound(playerMove, computerMove);
    //     console.log(winner);

    //     if (winner === 'player') {
    //         playerPoints++;
    //     } else if (winner === 'computer') {
    //         computerPoints++;
    //     }
    // }

    // if (playerPoints > computerPoints) {
    //     console.log('The winner of this game is Player!');
    // } else if (playerPoints < computerPoints) {
    //     console.log('The winner of this game is Computer!');
    // } else {
    //     console.log(`${playerPoints} and ${computerPoints} makes it a tie!`)
    // }

    const buttons = document.querySelectorAll('button');
    
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            let playerMove = button.innerText;
            let computerMove = computerPlay();

            let winner = playRound(playerMove, computerMove);
            console.log(winner);

            const score = document.querySelector('#winner');
                score.innerText = winner;
        })
    })
}

game();