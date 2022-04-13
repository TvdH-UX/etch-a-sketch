const container = document.querySelector(".container");

// Function to create a grid of 16x16

function generateGrid(number){
    const totalSquares = number * number;
    for (let i = 0; i < totalSquares; i++){
        const div = document.createElement("div");
        div.classList.add("square");
        container.append(div);
    };
}

// container.append(div)