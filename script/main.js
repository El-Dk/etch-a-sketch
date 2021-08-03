const completeGrid = document.querySelector('#completeGrid');
const colorInput = document.querySelector('#colorInput');
const GRIDSIZE = 28;
let colorChosen = colorInput.value;

colorInput.addEventListener('change', () => {
    colorChosen = colorInput.value;
});
function createGrid(size){
    completeGrid.style.gridTemplateColumns = `repeat(${size}, ${GRIDSIZE / size}rem)`;
    completeGrid.style.gridTemplateRows = `repeat(${size}, ${GRIDSIZE / size}rem)`;
    for(let i = 1; i <= size; i++){
        for(let j =1; j <= size; j++){
            const square = document.createElement('div');
            square.classList.add('square');
            square.style.width = `${GRIDSIZE / size}rem`;
            square.style.height = `${GRIDSIZE / size}rem`;
            square.style.opacity = 0;
            square.addEventListener('mouseover', paintSquare);
            completeGrid.appendChild(square);
        }
    }
}
function paintSquare(elem){
    let squareOpacity = Number(elem.target.style.opacity);
    //if(elem.style.backgroundColor)
    if(squareOpacity === 0){
        elem.target.setAttribute('data-color', colorChosen);
    }
    else if(elem.target.getAttribute('data-color') !== colorChosen){
        elem.target.setAttribute('data-color', colorChosen);
        squareOpacity = 0;
    }
    if(squareOpacity < 1){
        squareOpacity +=0.1;
        elem.target.style.backgroundColor = colorChosen;
        elem.target.style.opacity = squareOpacity;
    }
}

//createGrid(Number(prompt("Size:")));
createGrid(6);
console.log(colorInput);
