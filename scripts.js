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
for (let i = 1; i <= 16; i++) {
    createRow(16, "row-" + i);
}

const pixels = document.querySelectorAll('.square');

// we use the .forEach method to iterate through each button
pixels.forEach((square) => {

    // and for each one we add a 'click' listener
    square.addEventListener('mouseover', () => {
        square.setAttribute('style', "background-color: white;");
    });
  });