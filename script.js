const divContainer = document.getElementById('divContainer');







//Using javascript, create 256 (16 x 16) square divs

function createDivsForGrid(size) {
    let gridSize = (480 / size + 'px').toString()
    for (i = 0 ;i < size; i++) {
        const row = document.createElement('div');
        row.classList.add('gridRow');
        row.style.display = 'flex';
        for (j = 0 ;j < size; j++) {
            const gridDiv =  document.createElement('div');
            gridDiv.style.width = gridSize
            gridDiv.style.height = gridSize
            gridDiv.style.border = '1px solid black';
            gridDiv.classList.add('gridDiv');
            
            
            row.appendChild(gridDiv);
            
        }
        divContainer.appendChild(row);
    }

//Figure out a way to use the 'hover' event to make the 
//divs change color as the mouse hovers over them 

    const allBoxes = document.querySelectorAll('.gridDiv');


    allBoxes.forEach(div => {div.addEventListener('mouseover', 
    function handleMouseOver() {
        div.style.backgroundColor = 'red';
    })})

}



//Handling user input
const gridValue = document.getElementById('gridValue');
const loadButton = document.getElementById('load');
const refreshButton = document.getElementById('refresh')
gridValue.innerHTML = gridValue.value;



function loadInputValue() {
    const inputValue = document.getElementById('gridValue').value;
    createDivsForGrid(inputValue)
    loadButton.removeEventListener('click', loadInputValue);
    


    
}

loadButton.addEventListener('click', loadInputValue);







function loadGrid() {
    load = location.reload()
}


refreshButton.addEventListener('click', loadGrid)







