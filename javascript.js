function createGrid(numberOfRows) {
    container.innerHTML = '';

    for (let i = 0; i < gridSize.dataset.size; i++) {
        const row = document.createElement("div");
        container.appendChild(row);

        for (let j = 0; j < numberOfRows; j++) {
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
            square.style.backgroundColor = "black";
        });
    })
}

function calculateNumberOfRows(numberOfColumns) {
    const squareWidth = window.innerWidth / numberOfColumns;
    const numberOfRows = Math.floor(window.innerHeight / squareWidth);
    return numberOfRows;
}

const container = document.querySelector("#container");
const gridSize = document.querySelector("#size");

gridSize.addEventListener("click", () => {
    gridSize.dataset.size = prompt ();
    let numberOfRows = calculateNumberOfRows(gridSize.dataset.size);
    createGrid(numberOfRows);
    addGridEventListeners();
})