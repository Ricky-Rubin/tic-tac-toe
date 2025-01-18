const cell1 = document.querySelector('#cell1');
const cell2 = document.querySelector('#cell2');
const cell3 = document.querySelector('#cell3');
const cell4 = document.querySelector('#cell4');
const cell5 = document.querySelector('#cell5');
const cell6 = document.querySelector('#cell6');
const cell7 = document.querySelector('#cell7');
const cell8 = document.querySelector('#cell8');
const cell9 = document.querySelector('#cell9');

let click = true;

function cellClick (cell) {
    if (cell.textContent === '') {
        if (click) {
            cell.textContent = 'X'
            click = false;
        } else {
            cell.textContent = 'O'
            click = true; 
        }
    }
}

cell1.addEventListener('click', () => {
    cellClick(cell1);
});

cell2.addEventListener('click', () => {
    cellClick(cell2);
});

cell3.addEventListener('click', () => {
    cellClick(cell3);
});

cell4.addEventListener('click', () => {
    cellClick(cell4);
});

cell5.addEventListener('click', () => {
    cellClick(cell5);
});

cell6.addEventListener('click', () => {
    cellClick(cell6);
});

cell7.addEventListener('click', () => {
    cellClick(cell7);
});

cell8.addEventListener('click', () => {
    cellClick(cell8);
});

cell9.addEventListener('click', () => {
    cellClick(cell9);
});