function createGrid(container) {
    for (let i = 0; i < 4; i++) {
        const row = document.createElement("div");
        container.appendChild(row);

        for (let j = 0; j < 4; j++) {
            const column = document.createElement("div");
            row.appendChild(column);
            column.classList.add("gridSquare");
        }
    }
    
}

const container = document.querySelector("#container");

createGrid(container);

const grid = Array.from(document.querySelectorAll(".gridSquare"));

grid.forEach(square => {
    square.addEventListener("mouseenter", () => {
        console.log("Hi");
        square.classList.add("backgroundColor")
    });
})