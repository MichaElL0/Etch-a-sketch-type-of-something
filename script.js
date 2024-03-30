const container = document.querySelector(".container");
const button = document.querySelector("#grid-size-button");
let gridSize = 16;

drawGrid(gridSize);

button.addEventListener("click", e => {
    gridSize = prompt("Input a number of squares per side: ", 16);
    if(gridSize > 100) {
        alert("Number can't be larger than 100!");
        gridSize = 16;
    }

    container.textContent = "";

    drawGrid(gridSize);
});


const divs = document.querySelectorAll(".container div");

divs.forEach(item => {
    item.addEventListener("mouseover", e => {
        e.target.style.backgroundColor = "blue";
    })
});

function drawGrid(size) {
    for (let i = 1; i <= size; i++) {
        for (let x = 1; x <= size; x++) {
            const div = document.createElement("div");
            div.className = `cell num-${i}-${x}`;
            container.appendChild(div);
        }
    }

    container.style.width = `${40 * size}px`;
}
