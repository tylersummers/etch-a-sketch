// Initial 16x16 Grid
const container = document.querySelector('.container')
container.style.display = "grid";
container.style.gridTemplateColumns = "repeat(16, 1fr)";
container.style.gridTemplateRows = "repeat(16, 1fr)";

for (let i = 0; i < 256; i++) {
    const cell = document.createElement('div')
    cell.classList.add('cell')
    container.appendChild(cell)
}

function hoverEffect() {
    const cell = document.querySelectorAll('.cell')
    cell.forEach(cell => {
    cell.addEventListener("mouseover", (event) => {
        const min = 0
        const max = 255
        let r = String(Math.floor(Math.random() * (max - min + 1)) + min);
        let g = String(Math.floor(Math.random() * (max - min + 1)) + min);
        let b = String(Math.floor(Math.random() * (max - min + 1)) + min);
        event.target.style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ")"
    })
})
}

hoverEffect();

const button = document.querySelector('button')
button.addEventListener("click", (event) => {
    let gridSize = window.prompt("Enter number of squares per side! (1-100)")
    gridSize = parseInt(gridSize)

    if (gridSize >= 1 && gridSize <= 100) {
        const cells = document.querySelector('.container')
        cells.replaceChildren();
        container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

        for (let i = 0; i < gridSize * gridSize; i++) {
            const cell = document.createElement('div')
            cell.classList.add('cell')
            cell.style.width = "100%"
            cell.style.height = "100%"
            container.appendChild(cell)

        }
        hoverEffect();
    }
})