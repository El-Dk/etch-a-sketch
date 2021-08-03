const completeGrid = document.querySelector('#completeGrid');
const GRIDSIZE = 25;

completeGrid.style.backgroundColor = "red";

function createGrid(size){
    completeGrid.style.gridTemplateColumns = `repeat(${size}, ${GRIDSIZE / size}rem)`;
    completeGrid.style.gridTemplateRows = `repeat(${size}, ${GRIDSIZE / size}rem)`;
    for(let i = 1; i <= size; i++){
        for(let j =1; j <= size; j++){
            const square = document.createElement('div');
            square.classList.add('square');
            square.style.width = `${GRIDSIZE / size}rem`;
            square.style.height = `${GRIDSIZE / size}rem`;
            completeGrid.appendChild(square);
        }
    }
}
createGrid(Number(prompt("Size:")));