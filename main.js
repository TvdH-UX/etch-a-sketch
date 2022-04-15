const body = document.body;
const header = document.createElement("header");
body.prepend(header);

const resetButton = document.createElement("button");
resetButton.textContent = "Reset";
header.appendChild(resetButton);

const container = document.querySelector(".container");

function askValue(){
    const value = parseInt(prompt("Enter a number to generate a grid"));
    return value;
}

// Function to create a grid of 16x16
function generateGrid(value){
    value = askValue();
    const totalSquares = value * value;
    console.log(totalSquares)
    for (let i = 0; i < totalSquares; i++){
        const block = document.createElement("div");
        block.classList.add("square");
        container.append(block);
    };
};

function initializeSketching(){
    const blocks = document.querySelectorAll(".square");
    blocks.forEach((block) => {
        block.addEventListener('mouseenter', () => {
            block.classList.add("squareHovered");
        });
    });
};

generateGrid();
initializeSketching();

// Event listener to change the color of a square when moused over

resetButton.addEventListener('click', () => {
    const blocks = document.querySelectorAll(".square");
    blocks.forEach((block) => {
        block.remove();
        
    });
    generateGrid();
    initializeSketching();
});