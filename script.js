//a function that makes 16 *16 divs and appends them to the grid container


function closeModal() {
    document.getElementById("instructionModal").style.display = "none";
}

// Show the modal when the page loads
document.onload = function () {
    document.getElementById("instructionModal").style.display = "block";
}


let count = 0;
let randomColors = false;
let blackColour = false;
function createGrid(size = 16) {
    randomColors = false;
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
        if (randomColors) {
            e.target.style.backgroundColor = randomColor();
        } else if (blackColour) {
            e.target.style.backgroundColor = 'black';
        } else {
            e.target.style.backgroundColor = 'white';
        }

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


//returns a random color
function randomColor() {
    let r = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
}

//changes the color of the divs to a random color
const randomButton = document.querySelector('#rainbowButton');
randomButton.addEventListener('click', function () {
    randomColors = true;
});


//changes the color of the divs to black
const blackButton = document.querySelector('#blackPencil');
blackButton.addEventListener('click', function () {
    randomColors = false;
    blackColour = true;
});

//clears the grid
const clearButton = document.querySelector('#clearButton');
clearButton.addEventListener('click', function () {
    randomColors = false;
    blackColour = false;

});


//add progresive darkening effect where each interaction with the divs makes them darker
const darkenButton = document.querySelector('#darkenButton');
darkenButton.addEventListener('click', function (yahoo) {
    console.log("I am here")
    randomColors = false;
    blackColour = true;
    container.addEventListener('mouseover', function (e) {
        if (e.target.id !== 'grid-container') {
            let opacity = Number(e.target.style.opacity);
            if (opacity < 1) {
                e.target.style.opacity = opacity + 0.1;
            }
        }
    });
});