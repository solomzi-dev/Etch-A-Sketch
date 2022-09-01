const container = document.querySelector('.container');

// Create the grid
function createGrid(gridSize) {
    const containerSize = 480;
    const cellSize = containerSize / gridSize;

    for(let i = 0; i < gridSize * gridSize; i++) {
        let cell = document.createElement('div');
        cell.setAttribute('class', 'cell');
        cell.style.cssText = `width: ${cellSize}px; height: ${cellSize}px; border: 1px solid #000`;
        container.appendChild(cell);
    }
}
createGrid(23);

const cells = document.querySelectorAll('.cell');
console.log(cells);
cells.forEach(cell => {
    cell.addEventListener('mouseover', e => {
        e.target.style.backgroundColor = 'black';
    })
});