//a function that makes 16 *16 divs and appends them to the grid container
let count = 0;
function createGrid(size = 16) {
    while (size <= 0 || size > 100) {
        alert('Please enter a number between 0 and 100');
        size = Number(prompt('Enter the size of the grid'));

    }
    const container = document.querySelector('#grid-container');
    const width = (805) / size
    const height = (805) / size

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            const div = document.createElement('div');
            div.style.width = `${width}px`;
            div.style.height = `${height}px`;
            container.appendChild(div);

        }
    }
}
createGrid();


const container = document.querySelector('#grid-container');
container.addEventListener('mouseover', function (e) {
    if (e.target.id !== 'grid-container') {
        count++;
        e.target.style.backgroundColor = 'black';
        console.log(count);
    }

});


//ask a user to create new grid

const button = document.querySelector('#newButton');

button.addEventListener('click', function () {
    let size = Number(prompt('Enter the size of the grid'));
    const container = document.querySelector('#grid-container');
    container.innerHTML = '';

    createGrid(size);
});