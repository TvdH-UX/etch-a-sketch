const body = document.body;
const header = document.createElement("header");
body.append(header);
const container = document.createElement("div");
container.classList.add("container");
body.append(container);

const resetButton = document.createElement("button");
resetButton.textContent = "Reset";
header.appendChild(resetButton);

function askValue(){
    let value = parseInt(prompt("Enter a number from 1 to 100 to generate a grid"));
    while (value < 1 || value > 100 || isNaN(value)) {
        value = parseInt(prompt("Please, enter a number from 1 to 100 to generate a grid"));
    }
    return value;
}

// Function to create a grid of 16x16
function generateGrid(value){
    value = askValue();
    container.style.gridTemplateColumns = "repeat("+value+", 1fr)";
    container.style.gridTemplateRows = "repeat("+value+", 1fr)";
    const totalSquares = value * value;
    for (let i = 0; i < totalSquares; i++){
        const block = document.createElement("div");
        block.classList.add("square");
        container.append(block);
    };
    initializeSketching();
};

function randomColor(){
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const rgb = `rgb(${r},${g},${b})`;
    return rgb;
};

function initializeSketching(){
    const blocks = document.querySelectorAll(".square");
    blocks.forEach((block) => {
        block.addEventListener('mouseenter', () => {
            block.style.backgroundColor = randomColor();
            // block.classList.add("squareHovered");
        });
    });
};

// function initializeSketching(){
//     const blocks = document.querySelectorAll(".square");
//     blocks.forEach((block) => {
//         block.addEventListener('mouseenter', () => {
//             block.classList.add("squareHovered");
//         });
//     });
// };

generateGrid();

// Event listener to change the color of a square when moused over

resetButton.addEventListener('click', () => {
    const blocks = document.querySelectorAll(".square");
    blocks.forEach((block) => {
        block.remove();
    });
    generateGrid();
});