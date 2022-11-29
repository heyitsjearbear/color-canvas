//grab the container that we will eventually append to
const gridContainer = document.querySelector(".grid");

//create a function that will create one row of passed parameter squares
let createRow = (numOfSquares,rowNumber) => {
    //create row div itself
    let newRow = document.createElement("div");
    newRow.classList.add("row");
    newRow.id = rowNumber;
    //within the new row created, create 'numofSquares' divs
    for (let i = 1; i <= numOfSquares; i++){
        let newSquare = document.createElement("div");
        newSquare.classList.add("square");
        newSquare.textContent = "";
        
        //append to row that was just created
        newRow.appendChild(newSquare);
    }
    gridContainer.appendChild(newRow);
};

//function creates whole grid
let createGrid = (desiredWidth) => {
    for (let i = 1; i <= desiredWidth; i++) {
        createRow(desiredWidth, "row-" + i);
    }
}


//for 64
/*
width: 6px;
    height: 6px;
    aspect-ratio: 1 / 1;
 */
//for 20 width and height aspect-ratio: 1 / 1;
createGrid(16);



//event handling here
const pixels = document.querySelectorAll('.square');

// we use the .forEach method to iterate through each square
pixels.forEach((square) => {

    // and for each one we add a hover listener
    square.addEventListener('mouseover', () => {
        square.setAttribute('style', "background-color: black;");
    });
});

//handle the event where user wants to reset color of grid
const reset = document.querySelector('#reset-button');
reset.addEventListener('click', () => {
    pixels.forEach((square) => {
        square.setAttribute('style', "background-color: white;");
    });
});