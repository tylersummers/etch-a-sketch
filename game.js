// Initial 16x16 Grid
const container = document.querySelector('.container')

for (let i = 0; i < 256; i++) {
    const cell = document.createElement('div')
    cell.classList.add('cell')
    container.appendChild(cell)
}

// Colour on Hover Effect
const cell = document.querySelectorAll('.cell')
cell.forEach(cell => {
cell.addEventListener("mouseover", (event) => {
        event.target.style.backgroundColor = "blue"
    })
})