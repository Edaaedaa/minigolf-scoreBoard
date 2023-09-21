const minusButtons = document.querySelectorAll(".minus-button");
const plusButtons = document.querySelectorAll(".plus-button");
const valueElements = document.querySelectorAll(".value");

function updateValue(index, change) {
    let value = parseInt(valueElements[index].textContent);
    value += change;
    valueElements[index].textContent = value;
}

for (let i = 0; i < minusButtons.length; i++) {
    minusButtons[i].addEventListener("click", () => {
        updateValue(i, -1);
    });

    plusButtons[i].addEventListener("click", () => {
        updateValue(i, 1);
    });
}