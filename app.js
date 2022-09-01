const container = document.querySelector('.container');

for(let i = 0; i < 256; i++) {
    let cell = document.createElement('div');
    cell.style.cssText = 'width: 30px; height: 30px; border: 1px solid #000';
    container.appendChild(cell);
}