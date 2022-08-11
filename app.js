// gave the page container a variable.
const container = document.querySelector('#container');
// created a grid variable to hold the grid cells in the webpage, and adding the class grid to the declared variable.
const grid = document.createElement('div');
grid.classList.add('grid');

// window prompt will ask the user for the number of boxes to be displayed.
let number = window.prompt("Enter a random number");


// function to create the grid
function generateGrid (number) {
    // measure to keep the number of boxes limited to 16 per column, to avoid overflow of boxes from the webpage.
    if (number > 0) {
        if (number > 16) {
            number = 16;
        }
    }
    else if (number < 0) {
        if (number < -16) {
            number = 16;
        }
        else {
            number = -number;
        }
    }

    for (let i=1; i<=number; i++) {
        // creating a column element to contain the boxes per column, and then adding the class column for each column, and appending the columns to the grid element.
        let column = document.createElement('div');
        column.classList.add('column');
        grid.appendChild(column);
    
        // loop to create an equal number of boxes per column, adding the class of box to each box in the column, and then appending the box elements to the column.
        for (let j=1; j<=number; j++) {
            let box = document.createElement('div');
            box.classList.add('box');
            column.appendChild(box);
        }
        container.appendChild(grid);
    }
}

// event listener to change the color of the box when hover
grid.addEventListener (
    'mouseover', function (e) {
        if (e.target.matches('.box')) {
            e.target.classList.add('active');
        }
    }
);


// function to remove the grid when the removegrid button is pressed.
function regenerateGrid () {
    container.removeChild(grid);
}

// function to generate the grid when a window is loaded.
window.onload = function () {
    generateGrid(number);
}
