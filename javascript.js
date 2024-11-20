function createGrid() {
    container.innerHTML = '';

    for (let i = 0; i < gridSize.dataset.size; i++) {
        const row = document.createElement("div");
        container.appendChild(row);

        for (let j = 0; j < gridSize.dataset.size; j++) {
            const column = document.createElement("div");
            row.appendChild(column);
            column.classList.add("gridSquare");
        }
    }
}

function addGridEventListeners() {
    const grid = Array.from(document.querySelectorAll(".gridSquare"));

    grid.forEach(square => {
        square.addEventListener("mouseenter", () => {
            square.classList.add("backgroundColor");
        });
    })
}

const container = document.querySelector("#container");
const gridSize = document.querySelector("#size");

gridSize.addEventListener("click", () => {
    gridSize.dataset.size = prompt ();
    createGrid();
    addGridEventListeners();
})