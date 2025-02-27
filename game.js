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

// Colour on Hover Effect
function hoverEffect() {
    const cell = document.querySelectorAll('.cell')
    cell.forEach(cell => {
    cell.addEventListener("mouseover", (event) => {
        let colour = Math
        event.target.style.backgroundColor = "blue"
    })
})
}

hoverEffect();

// Enable changes to grid size
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