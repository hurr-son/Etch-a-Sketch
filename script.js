const divContainer = document.getElementById('divContainer');







//Using javascript, create 256 (16 x 16) square divs

function createDivsForGrid(size) {
    
    divContainer.style.maxWidth = '100%';
    
    
    
    let gridSize = (((480 / size) -2) + 'px').toString()
    for (i = 0 ;i < size; i++) {
        let row = document.createElement('div');
        row.classList.add('gridRow');
        row.style.display = 'flex';
        row.style.flex = 'auto';
        for (j = 0 ;j < size; j++) {
            let gridDiv =  document.createElement('div');
            gridDiv.style.width = gridSize;
            gridDiv.style.height = gridSize;
            
            gridDiv.style.border = '1px solid grey';
            gridDiv.classList.add('gridDiv');
            gridDiv.style.display = 'flex';
            gridDiv.style.flex = 'auto';
            gridDiv.style.backgroundColor = 'white';
            
            
            row.appendChild(gridDiv);
            
        }
        divContainer.appendChild(row);
    }
    
    //Figure out a way to use the 'hover' event to make the 
    //divs change color as the mouse hovers over them 
    
    let allBoxes = document.querySelectorAll('.gridDiv');

    
    
    allBoxes.forEach(div => {div.addEventListener('mouseover', 
    function handleMouseOver() {
        div.style.backgroundColor = 'rgb(15, 61, 62)';
    })})

    //This function clears the sketch with the refresh
    
    function refresh() {
    allBoxes.forEach((div) => {div.style.backgroundColor = 'white'});
}

clearButton.addEventListener('click', refresh)

}


//Handling user input
const gridValue = document.getElementById('gridValue');
const loadButton = document.getElementById('load');
const clearButton = document.getElementById('clear')
gridValue.innerHTML = gridValue.value;

createDivsForGrid(10)

function removeChildNodes(parent) {
    while(parent.firstChild) {
        parent.removeChild(parent.firstChild)
    }
}





function loadInputValue() {
    removeChildNodes(divContainer)
    
    const inputValue = document.getElementById('gridValue').value;
    createDivsForGrid(inputValue)
    
   
}

loadButton.addEventListener('click', loadInputValue);












