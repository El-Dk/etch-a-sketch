const completeGrid = document.querySelector('#completeGrid');
const GRIDSIZE = 28;
let colorChosen = 100;

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
            square.setAttribute('data-opacity', 0);
            square.addEventListener('mouseover', paintSquare);
            completeGrid.appendChild(square);
        }
    }
}
function paintSquare(elem){
    let squareOpacity = Number(elem.target.getAttribute('data-opacity'));
    if(squareOpacity < 1){
        squareOpacity +=0.1;
        elem.target.style.backgroundColor = `hsla(${colorChosen}, 100%, 50%, ${squareOpacity})`;
        elem.target.setAttribute('data-opacity', squareOpacity);
    }
}
createGrid(Number(prompt("Size:")));
