// gave the page container a variable.
const container = document.querySelector('#container');
// created a grid variable to hold the grid cells in the webpage, and adding the class grid to the declared variable.
const grid = document.createElement('div');
grid.classList.add('grid');

// window prompt will ask the user for the number of boxes to be displayed.
let number = window.prompt("Enter a random number");
let gridNumber = number;

// function to create the grid
function generateGrid (number) {
// for loop to display an equal number of boxes, based on the user provided number.
    for (let i=1; i<=number*number; i++) {
        let box = document.createElement('div');
        box.classList.add('box');
        grid.appendChild(box);
    }
    container.appendChild(grid);
}

// event listener to change the color of the box when hover
grid.addEventListener (
    'mousedown', function (e) {
        if (e.target.matches('.box')) {
            e.target.classList.add('mousedown');
        }
    }
);

// function to display the grid when the window is loaded.
window.addEventListener (
    'load', () => {
        generateGrid(number);
        // sets the required property for the grid.
        grid.style.setProperty('--gridNumber', gridNumber);
    }
)

// function to reset the grid, removes the background color classes from the box after the mousedown event occurs.
function resetGrid () {
    while (grid.firstChild) {
        grid.removeChild(grid.lastChild);
    }
    generateGrid(number);
}

