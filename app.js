const container = document.querySelector('#container');
const grid = document.createElement('div');
grid.classList.add('grid');

let number = 5;

for (let i=1; i<=number; i++) {
    let row = document.createElement('div');
    row.classList.add('row');

    for (let j=1; j<=number; j++) {
        let box = document.createElement('div');
        box.classList.add('box');
        box.setAttribute('style', 'border: 2px solid black;  width: 20px; height: 20px');
        container.appendChild(box);
    }
    container.appendChild(grid);
}

