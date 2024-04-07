const container = document.querySelector(".container");
const gridSizeButton = document.querySelector("#grid-size-button");
const resetButton = document.querySelector("#reset-button");
const rainbowButton = document.querySelector("#rainbow-button");
const opacityButton = document.querySelector("#opacity-button");
let gridSize = 16;
let isRainbow = true;

drawGrid(gridSize);

function drawGrid(size) {
    for (let i = 1; i <= size; i++) {
        for (let x = 1; x <= size; x++) {
            const div = document.createElement("div");
            div.className = `cell`;
            div.setAttribute("style", `width: ${(container.clientHeight) / size}px; height: ${(container.clientWidth) / size}px;`);
            container.appendChild(div);
        }
    }

    const divs = document.querySelectorAll(".container div");

    divs.forEach(item => {
        let opacity = 100;
        item.addEventListener("mouseover", e => {
            if(isRainbow) {
                e.target.style.backgroundColor = `hsl(${Math.floor(Math.random() * 255)}, 100%, ${opacity-=10}%)`;
            }
            else {
                e.target.style.backgroundColor = "blue";
            }
        })
    });
}

gridSizeButton.addEventListener("click", e => {
    gridSize = prompt("Input a number of squares per side: ", 16);
    if(gridSize > 100 || gridSize < 2) {
        alert("Number must be between 2 and 100!");
        gridSize = 16;
    }
    
    container.textContent = "";
    
    drawGrid(gridSize);
});

resetButton.addEventListener("click", e => {
    const divs = document.querySelectorAll(".container div");
    
    divs.forEach(item => {
        item.style.backgroundColor = "#FCFCFC";
    })
});

let rainbowCounter = 1;

rainbowButton.addEventListener("click", e => {
    rainbowCounter++;

    if(rainbowCounter % 2 == 0) {
        //is unclicked
        rainbowButton.classList.remove("button-clicked");
        isRainbow = false;
    }
    else if(rainbowCounter % 2 != 0) {
        //is clicked
        rainbowButton.classList.add("button-clicked");
        isRainbow = true;
    }
});

window.addEventListener("mousemove", e => {
    rainbowButton.style.color = `rgb(${e.offsetX}, ${e.offsetY}, 220)`;
});

let opacityCounter = 1;

opacityButton.addEventListener("click", e => {
    opacityCounter++;

    if(opacityCounter % 2 == 0) {
        //is unclicked
        opacityButton.classList.remove("button-clicked");
    }
    else if(opacityCounter % 2 != 0) {
        //is clicked
        opacityButton.classList.add("button-clicked");
    }
});

