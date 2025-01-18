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
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9],
        [1, 5, 9],
        [3, 5, 7]
    ];

    for (let i = 0; i < winPattern.length; i++) {
        const [a, b, c] = winPattern[i];

        if (cells[a].textContent !== '' && cells[a].textContent === cells[b].textContent
            && cells[b].textContent === cells[c].textContent
        ) {
            result.textContent = `${cells[a].textContent} wins the round`
        }
    }
}

cell1.addEventListener('click', () => {
    markMatch();
    cellClick(cell1);
});

cell2.addEventListener('click', () => {
    markMatch();
    cellClick(cell2);
});

cell3.addEventListener('click', () => {
    markMatch();
    cellClick(cell3);
});

cell4.addEventListener('click', () => {
    markMatch();
    cellClick(cell4);
});

cell5.addEventListener('click', () => {
    markMatch();
    cellClick(cell5);
});

cell6.addEventListener('click', () => {
    markMatch();
    cellClick(cell6);
});

cell7.addEventListener('click', () => {
    markMatch();
    cellClick(cell7);
});

cell8.addEventListener('click', () => {
    markMatch();
    cellClick(cell8);
});

cell9.addEventListener('click', () => {
    markMatch();
    cellClick(cell9);
});