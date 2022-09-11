const container = document.querySelector('.container');
const input = document.querySelector('#userNum');
const form = document.querySelector('form');

// Create the grid
function createGrid(pixelNum) {
    if(!IsValid(pixelNum)) return;
    const containerSize = 480;
    const cellSize = containerSize / pixelNum;

    for(let i = 0; i < pixelNum * pixelNum; i++) {
        let cell = document.createElement('div');
        cell.setAttribute('class', 'cell');
        cell.style.cssText = `width: ${cellSize}px; height: ${cellSize}px; border: 1px solid black`;
        container.appendChild(cell);
    }
    draw();
}

// Validation function
function IsValid(pixelNum) {
    if(isNaN(pixelNum)) {
        alert('Please enter a valid number.');
        createGrid(16);
        return false;
    }
    if(pixelNum < 2 || pixelNum > 100) {
        alert('Please enter a number between 2 and 100.');
        createGrid(16);
        return false;
    }
    if(!pixelNum) {
        alert('Input is empty.');
        createGrid(16);
        return false;
    }
    return true;
}

function changeColor(e) {
    e.target.style.backgroundColor = 'black';
}

function draw() {
    container.addEventListener('mousedown', e => {
        if(e.target.className === 'cell') {
            e.target.addEventListener('mouseover', changeColor);
        }
    });
}

createGrid(16);

form.addEventListener('submit', e => {
    e.preventDefault();
    const userInput = input.value;
    container.innerHTML = '';
    createGrid(userInput);
    input.value = '';
});