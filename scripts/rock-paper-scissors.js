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

    return winner;
}

function game() {

    const buttons = document.querySelectorAll('.move-btn');
    
    let playerPoints = 0;
    let computerPoints = 0;
    let playerScore = document.querySelector('#player-score');
    let computerScore = document.querySelector('#computer-score');
    let playerCurrentMove = "";

    let playerMoveImage = document.querySelector('#player-selection');
    let computerMoveImage = document.querySelector('#computer-selection');
    let gameWinner = document.querySelector('#winner-of-the-game');

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            
            playerCurrentMove = button.innerText;

            playerMoveImage.classList.add('player-prepare');
            
            //Ensures starting image is always 'rock'
            playerMoveImage.src="images/rock-left.png"

            computerMoveImage.classList.add('computer-prepare');

            computerMoveImage.src="images/rock-right.png"
        })
    })

    function removeTransition(e) {  

        let playerMove = playerCurrentMove;
        let computerMove = computerPlay();

        console.log(playerMove);
        console.log(computerMove);

        //Getting the img of player's selection
        let playerSelection = document.querySelector('#player-selection');
        let computerSelection = document.querySelector('#computer-selection');

        playerSelection.src = `images/${playerCurrentMove.toLowerCase()}-left.png`;
        playerSelection.style['transform'] = "rotate(90deg)";
        playerSelection.classList.remove('player-prepare');

        computerSelection.src = `images/${computerMove.toLowerCase()}-right.png`;
        computerSelection.style['transform'] = "rotate(-90deg)";
        computerSelection.classList.remove('computer-prepare');

        if (playerPoints < 5 && computerPoints < 5) {

            let roundWinner = playRound(playerMove, computerMove);
            console.log(roundWinner);

            if (roundWinner === 'player') {
                playerPoints++;
                playerScore.innerText = playerPoints;
            } else if (roundWinner === 'computer') {
                computerPoints++;
                computerScore.innerText = computerPoints;
            }

        } 

        const replayButton = document.querySelector('#replay-btn');
        const buttons = document.querySelectorAll('.move-btn');

        if (playerPoints === 5 || computerPoints === 5) {
                
            buttons.forEach((button) => {
                button.hidden = true;
            })

            if (playerPoints > computerPoints) {
                gameWinner.innerText = 'You won this game!';
            } else {
                gameWinner.innerText = 'Computer won this game. :('
            }
            
            replayButton.hidden = false;
        }

    }

    function reset() {

        console.log('restarting...')
        playerPoints = 0;
        computerPoints = 0;

        playerScore.innerText = playerPoints;
        computerScore.innerText = computerPoints;
        
        replayButton.hidden = true;

        buttons.forEach((button) => {
            button.hidden = false;
        })

        playerMoveImage.src = "images/rock-left.png";
        playerMoveImage.style['transform'] = "rotate(0deg)";
        computerMoveImage.src = "images/rock-right.png";
        computerMoveImage.style['transform'] = "rotate(0deg)";

        gameWinner.innerHTML = "";
        
    }

    const shoot = document.querySelector('#player-selection');
    shoot.addEventListener('animationend', removeTransition);

    const replayButton = document.querySelector('#replay-btn');
    replayButton.addEventListener('click', reset);

}

game();