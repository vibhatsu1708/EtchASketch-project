const container = document.querySelector('#container');
const buttonsAndGrid = document.querySelector('#buttons-and-grid');
const grid = document.createElement('div');
grid.classList.add('grid');
const userInput = document.querySelector('#quantity');
const resetButton = document.querySelector('#reset-grid-button');

let number
let gridNumber = number;

generateGrid = (number) => {
    for (let i=1; i<=number*number; i++) {
        let box = document.createElement('div');
        box.classList.add('box');
        grid.appendChild(box);
    }
    buttonsAndGrid.appendChild(grid);
    container.appendChild(buttonsAndGrid);
    grid.style.setProperty('--gridNumber', gridNumber);
}

grid.addEventListener (
    'mousedown', function (e) {
        if (e.target.matches('.box')) {
            e.target.classList.add('mousedown');
        }
    }
);


updateGrid = () => {
    grid.innerHTML = "";
    grid.style.setProperty("grid-template-columns", `repeat(${userInput.value}, 1fr)`);
    grid.style.setProperty("grid-template-rows", `repeat(${userInput.value}, 1fr)`);

    for (let i=1; i<=userInput.value*userInput.value; i++) {
        let box = document.createElement('div');
        box.classList.add('box');
        grid.appendChild(box);
    }
    buttonsAndGrid.appendChild(grid);
    container.appendChild(buttonsAndGrid);
    grid.style.setProperty('--gridNumber', '1fr');
}

userInput.addEventListener (
    "change", updateGrid
);

resetButton.addEventListener (
    'click', () => {
        while (grid.firstChild) {
            grid.removeChild(grid.lastChild);
        }
        generateGrid(userInput.value);
    }
)

generateGrid();



