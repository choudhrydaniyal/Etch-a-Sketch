const container = document.querySelector('#container');
const box = document.getElementsByClassName('box');
const btn = document.querySelector('#gridSize');

function createGrid(size = 16){
    // let size = prompt("Grid Size? ");
    container.innerHTML = '';
    for(let i=0; i<size; i++){
        for(let j=0; j<size; j++){
            const div = document.createElement('div');
            div.classList.add('box');
            container.appendChild(div);
        }
    }
    for(let i=0; i<box.length; i++){
        box[i].style.width = `${100/size}%`;
        box[i].style.height = `${100/size}%`;
        box[i].addEventListener('mouseover', () => {
            box[i].style.backgroundColor = 'black';
        });
    }
}

btn.addEventListener('click', () => {
    let size = prompt("Grid Size? ");
    while(size>100){
        alert("Grid size must be less than 100!")
        size = prompt("Grid Size? ");
    }
    createGrid(size);
});

createGrid();