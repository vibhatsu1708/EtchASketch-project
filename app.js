// gave the page container a variable.
const container = document.querySelector('#container');
// created a grid variable to hold the grid cells in the webpage, and adding the class grid to the declared variable.
const grid = document.createElement('div');
grid.classList.add('grid');

// window prompt will ask the user for the number of boxes to be displayed.
let number = window.prompt("Enter a random number");


// function to create the grid
function generateGrid (number) {
    // measure to keep the number of boxes limited to 16 per row, to avoid overflow of boxes from the webpage.
    if (number > 16) {
        number = 16;
    }

    for (let i=1; i<=number; i++) {
        // creating a row element to contain the boxes per row, and then adding the class row for each row, and appending the rows to the grid element.
        let row = document.createElement('div');
        row.classList.add('row');
        grid.appendChild(row);
    
        // loop to create an equal number of boxes per row, adding the class of box to each box in the row, and then appending the box elements to the row.
        for (let j=1; j<=number; j++) {
            let box = document.createElement('div');
            box.classList.add('box');
            row.appendChild(box);
        }
        container.appendChild(grid);
    }
}

// function regenerateGrid () {
    
// }

// function to generate the grid when a window is loaded.
window.onload = function () {
    generateGrid(number);
}
