function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}

const controls = {
    input: document.querySelector("#controls input"),
    createButton: document.querySelector("[data-create]"),
    destroyButton: document.querySelector("[data-destroy]"),
    boxesContainer: document.querySelector("#boxes"),
};

function createBoxes(amount) {
    const elements = [];
    let boxSize = 30;

    for (let i = 0; i < amount; i++) {
        const box = document.createElement("div");
        box.style.width = `${boxSize}px`;
        box.style.height = `${boxSize}px`;
        box.style.backgroundColor = getRandomHexColor();
        boxSize += 10;
        elements.push(box);
    }

    controls.boxesContainer.append(...elements);
}

function destroyBoxes() {
    controls.boxesContainer.innerHTML = "";
}

controls.createButton.addEventListener("click", () => {
    const amount = Number(controls.input.value.trim());

    if (amount >= 1 && amount <= 100) {
        destroyBoxes();
        createBoxes(amount);
        controls.input.value = "";
    } else {
        alert("Please enter a number between 1 and 100");
    }
});

controls.destroyButton.addEventListener("click", destroyBoxes);
