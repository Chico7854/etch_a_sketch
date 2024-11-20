function createGrid(numberOfRows) {
    container.innerHTML = '';

    for (let i = 0; i < gridSize.dataset.size; i++) {
        const row = document.createElement("div");
        container.appendChild(row);

        for (let j = 0; j < numberOfRows; j++) {
            const column = document.createElement("div");
            row.appendChild(column);
            column.classList.add("gridSquare");
            column.style.backgroundColor = "black";
            column.style.opacity = 0;
        }
    }
}

function addGridEventListeners() {
    const grid = Array.from(document.querySelectorAll(".gridSquare"));

    grid.forEach(square => {
        square.addEventListener("mouseenter", () => {
            if (square.style.opacity < 1) square.style.opacity = Number(square.style.opacity) + 0.2;
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

//Make a default option for when the user opens the web to already play the game
//Before the user needed to put the size of the grid to play
gridSize.dataset.size = 150;
let numberOfRows = calculateNumberOfRows(gridSize.dataset.size);
createGrid(numberOfRows);
addGridEventListeners();


gridSize.addEventListener("click", () => {
    gridSize.dataset.size = prompt ();
    let numberOfRows = calculateNumberOfRows(gridSize.dataset.size);
    createGrid(numberOfRows);
    addGridEventListeners();
})