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
    }
}

cell1.addEventListener('click', () => {
    cellClick(cell1);
    markMatch();
});

cell2.addEventListener('click', () => {
    cellClick(cell2);
    markMatch();
});

cell3.addEventListener('click', () => {
    cellClick(cell3);
    markMatch();
});

cell4.addEventListener('click', () => {
    cellClick(cell4);
    markMatch();
});

cell5.addEventListener('click', () => {
    cellClick(cell5);
    markMatch();
});

cell6.addEventListener('click', () => {
    cellClick(cell6);
    markMatch();
});

cell7.addEventListener('click', () => {
    cellClick(cell7);
    markMatch();
});

cell8.addEventListener('click', () => {
    cellClick(cell8);
    markMatch();
});

cell9.addEventListener('click', () => {
    cellClick(cell9);
    markMatch();
});