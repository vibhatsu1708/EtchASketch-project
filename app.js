// gave the page container a variable.
const container = document.querySelector('#container');
// referring to the buttons-and-grid div
const buttonsAndGrid = document.querySelector('#buttons-and-grid');
// created a grid variable to hold the grid cells in the webpage, and adding the class grid to the declared variable.
const grid = document.createElement('div');
grid.classList.add('grid');

// window prompt will ask the user for the number of boxes to be displayed.
let number = 16
let gridNumber = number;

// variable to store the user input value
const userInput = document.querySelector('#quantity');

// variable to call the reset button
const resetButton = document.querySelector('#reset-grid-button');

// function to create the grid
generateGrid = (number) => {
    // for loop to display an equal number of boxes, based on the user provided number.
    for (let i=1; i<=number*number; i++) {
        let box = document.createElement('div');
        box.classList.add('box');
        grid.appendChild(box);
    }
    buttonsAndGrid.appendChild(grid);
    container.appendChild(buttonsAndGrid);
    // sets the required property for the grid.
    grid.style.setProperty('--gridNumber', gridNumber);
}

// event listener to change the color of the box when hover
grid.addEventListener (
    'mousedown', function (e) {
        if (e.target.matches('.box')) {
            e.target.classList.add('mousedown');
        }
    }
);

// function to update the grid
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

// function to reset the grid, removes the background color classes from the box after the mousedown event occurs.
resetButton.addEventListener (
    'click', () => {
        while (grid.firstChild) {
            grid.removeChild(grid.lastChild);
        }
        generateGrid(userInput.value);
    }
)

// calling the function to display the grid
generateGrid();



