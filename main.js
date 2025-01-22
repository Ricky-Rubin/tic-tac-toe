const cell1 = document.querySelector('#cell1');
const cell2 = document.querySelector('#cell2');
const cell3 = document.querySelector('#cell3');
const cell4 = document.querySelector('#cell4');
const cell5 = document.querySelector('#cell5');
const cell6 = document.querySelector('#cell6');
const cell7 = document.querySelector('#cell7');
const cell8 = document.querySelector('#cell8');
const cell9 = document.querySelector('#cell9');
const result = document.querySelector('#result');
const gameBoard = document.querySelector('.game-board');
const startOver = document.querySelector('#start-over');
const refresh = document.querySelector('.refresh');
const newGame = document.querySelector('#newGame');
const msgLayer = document.querySelector('.msg-layer');
const formLayer = document.querySelector('.form-layer');
const playerOne = document.querySelector('#playerOne');
const playerTwo = document.querySelector('#playerTwo');
const formStart = document.querySelector('#start');
const boardLayer = document.querySelector('.board-layer');
const roundCount = document.querySelector('#round');
const roundShow = document.querySelector('.round-count');
const playerOneName = document.querySelector('#player-one-name');
const player1Score = document.querySelector('#player-one-score');
const playerTwoName = document.querySelector('#player-two-name');
const player2Score = document.querySelector('#player-two-score');
const playerTurn = document.querySelector('#player-turn');
const reset = document.querySelector('#reset');

const cells = [cell1, cell2, cell3, cell4, cell5, cell6, cell7, cell8, cell9];

let click = true;

let round = 1;
let playerOneScore = 0;
let playerTwoScore = 0;

function cellClick (cell) {
    if (cell.textContent === '') {
        if (click) {
            playerTurn.textContent = `${playerTwo.value}'s turn`
            cell.textContent = 'X'
            click = false;
        } else {
            playerTurn.textContent = `${playerOne.value}'s turn`
            cell.textContent = 'O'
            click = true; 
        };
    };
};

function markMatch() {
    const winPattern = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let i = 0; i < winPattern.length; i++) {
        const [a, b, c] = winPattern[i];

        if (cells[a].textContent !== '' && cells[a].textContent === cells[b].textContent
            && cells[b].textContent === cells[c].textContent
        ) {
            result.textContent = `${cells[a].textContent} wins the round.`;
            playerTurn.textContent = '';
            break;
        }
    };

    let fullBoard = true;

    for (let i = 0; i < cells.length; i++) {
        if (cells[i].textContent === '') {
            fullBoard = false;
        };
    };

    if (fullBoard && result.textContent === '') {
        result.textContent = `Neither player wins the round. Start Over!`
    };

    if (result.textContent === 'X wins the round.') {
        playerOneScore++;
        player1Score.textContent = `${playerOneScore}`;
    }
    
    if (result.textContent === 'O wins the round.') {
        playerTwoScore++;
        player2Score.textContent = `${playerTwoScore}`
    }
};

function stopClick() {
    if (result.textContent !== '') {
        gameBoard.style.pointerEvents = 'none';
        refresh.style.display = 'block';
    };
};

function checkDraw() {
    let fullBoard = true;

    for (let i = 0; i < cells.length; i++) {
        if (cells[i].textContent === '') {
            fullBoard = false;
        };
    };

    if (fullBoard) {
        result.textContent = `Neither player wins the round. Start Over!`
    };
}

function playAgain() {
    click = true;
    gameBoard.style.pointerEvents = 'auto';
    refresh.style.display = 'none';
    cells.forEach((cell) => {
        cell.textContent = '';
    });
    result.textContent = '';
    round++;
};

startOver.addEventListener('click', () => {
    playAgain();
    roundCount.textContent = `${round}`
    playerTurn.textContent = `${playerOne.value}'s turn`
});

newGame.addEventListener('click', () => {
    msgLayer.style.display = 'none';
    formLayer.style.display = 'flex';
});

formStart.addEventListener('click', () => {
    formLayer.style.display = 'none';
    boardLayer.style.display = 'flex';
    roundShow.style.display = 'block'
    playerOneName.textContent = playerOne.value;
    playerTwoName.textContent = playerTwo.value;
    playerTurn.textContent = `${playerOne.value}'s turn`
});

reset.addEventListener('click', () => {
    click = true;
    playerOneScore = 0;
    playerTwoScore = 0;
    round = 1;
    playerOne.value = '';
    playerTwo.value = '';
    boardLayer.style.display = 'none';
    msgLayer.style.display = 'block';
    player1Score.textContent = `0`;
    player2Score.textContent = `0`;
    roundCount.textContent = `1`;
    roundShow.style.display = 'none';
    result.textContent = ''

    for (let i = 0; i < cells.length; i++) {
        if (cells[i].textContent !== '') {
            cells[i].textContent = '';
        };
    };
    refresh.style.display = 'none';
    gameBoard.style.pointerEvents = 'auto';
})

cell1.addEventListener('click', () => {
    cellClick(cell1);
    markMatch();
    stopClick();
});

cell2.addEventListener('click', () => {
    cellClick(cell2);
    markMatch();
    stopClick();
});

cell3.addEventListener('click', () => {
    cellClick(cell3);
    markMatch();
    stopClick();
});

cell4.addEventListener('click', () => {
    cellClick(cell4);
    markMatch();
    stopClick();
});

cell5.addEventListener('click', () => {
    cellClick(cell5);
    markMatch();
    stopClick();
});

cell6.addEventListener('click', () => {
    cellClick(cell6);
    markMatch();
    stopClick();
});

cell7.addEventListener('click', () => {
    cellClick(cell7);
    markMatch();
    stopClick();
});

cell8.addEventListener('click', () => {
    cellClick(cell8);
    markMatch();
    stopClick();
});

cell9.addEventListener('click', () => {
    cellClick(cell9);
    markMatch();
    stopClick();
});
