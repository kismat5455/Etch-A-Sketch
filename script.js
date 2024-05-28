//ca function that makes 16 *16 divs and appends them to the grid container

function createGrid() {
    const container = document.querySelector('#grid-container');
    for (let i = 0; i < 16; i++) {
        for (let j = 0; j < 16; j++) {
            const div = document.createElement('div');
            container.appendChild(div);
        }
    }
}
createGrid();


const container = document.querySelector('#grid-container');
container.addEventListener('mouseover', function (e) {
    if (e.target.id !== 'grid-container') {
        e.target.style.backgroundColor = 'black';
    }

});