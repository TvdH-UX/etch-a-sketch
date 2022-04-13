const container = document.querySelector(".container");

// Function to create a grid of 16x16

function generateGrid(number){
    const totalSquares = number * number;
    for (let i = 0; i < totalSquares; i++){
        const block = document.createElement("div");
        block.classList.add("square");
        container.append(block);
    };
};

generateGrid(16);

const blocks = document.querySelectorAll(".square");

blocks.forEach((block) => {
    block.addEventListener('mouseenter', () => {
        block.classList.add("squareHovered");
    });
});