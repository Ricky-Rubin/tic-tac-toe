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

const cells = [cell1, cell2, cell3, cell4, cell5, cell6, cell7, cell8, cell9];

let click = true;

function cellClick (cell) {
    if (cell.textContent === '') {
        if (click) {
            cell.textContent = 'X'
            click = false;
        } else {
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
            result.textContent = `${cells[a].textContent} wins the round`;
            break;
        }
    };

    let fullBoard = true;

    for (let i = 0; i < cells.length; i++) {
        if (cells[i].textContent === '') {
            fullBoard = false;
        };
    };

    if (fullBoard) {
        result.textContent = `Neither player wins the round. Start Over!`
    };
};

function stopClick() {
    if (result.textContent !== '') {
        gameBoard.style.pointerEvents = 'none';
        refresh.style.display = 'block';
    };
};

function playAgain() {
    click = true;
    gameBoard.style.pointerEvents = 'auto';
    refresh.style.display = 'none';
    cells.forEach((cell) => {
        cell.textContent = '';
    });
    result.textContent = '';
}

startOver.addEventListener('click', playAgain);

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