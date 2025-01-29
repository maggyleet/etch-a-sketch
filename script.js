const container = document.getElementById("grid");
for (let i = 0; i < 16 * 16; i++) {
    const div = document.createElement("div");
    div.classList.add("grid-item");
    div.addEventListener("mouseover", function() {
        div.style.backgroundColor = getLightColor();
    });
    container.appendChild(div);
}

function getLightColor() {
    let r = Math.floor(Math.random() * 128) + 128; // Ensures light red (128-255)
    let g = Math.floor(Math.random() * 128) + 128; // Ensures light green (128-255)
    let b = Math.floor(Math.random() * 128) + 128; // Ensures light blue (128-255)
    return `rgb(${r}, ${g}, ${b})`;
}

