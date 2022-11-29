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
        newSquare.textContent = i;
        
        //append to row that was just created
        newRow.appendChild(newSquare);
    }
    gridContainer.appendChild(newRow);
};
createRow(4,"row-1");
