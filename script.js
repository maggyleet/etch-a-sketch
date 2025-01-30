function getLightColor() {
    let r = Math.floor(Math.random() * 128) + 128;
    let g = Math.floor(Math.random() * 128) + 128;
    let b = Math.floor(Math.random() * 128) + 128;
    return `rgb(${r}, ${g}, ${b})`;
}

function createGrid(size) {
    const container = document.getElementById("grid");
    container.innerHTML = "";
    let squareSize = 480 / size + "px";

    for (let i = 0; i < size * size; i++) {
        const div = document.createElement("div");
        div.classList.add("grid-item");
        div.style.width = squareSize;
        div.style.height = squareSize;
        div.addEventListener("mouseover", function () {
            div.style.backgroundColor = getLightColor();
        });
        container.appendChild(div);
    }
}

function resetGrid() {
    let size = prompt("Enter the number of squares per side (max 100):");
    size = parseInt(size);
    if (size > 0 && size <= 100) {
        createGrid(size);
    } else {
        alert("Invalid input. Please enter a number between 1 and 100.");
    }
}

function resetColors() {
    const gridItems = document.querySelectorAll(".grid-item");
    gridItems.forEach(item => {
        item.style.backgroundColor = "white";
    });
}

document.addEventListener("DOMContentLoaded", function () {
    createGrid(16);
});
