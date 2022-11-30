//grab the container that we will eventually append to
const gridContainer = document.querySelector(".grid");

//create a function that will create one row of passed parameter squares
let createRow = (numOfSquares, rowNumber, pixelSize) => {
  //create row div itself
  let newRow = document.createElement("div");
  newRow.classList.add("row");
  newRow.id = rowNumber;
  //within the new row created, create 'numofSquares' divs
  for (let i = 1; i <= numOfSquares; i++) {
    let newSquare = document.createElement("div");
    newSquare.classList.add("square");
    newSquare.textContent = "";
    //base square height based on parameter
    newSquare.setAttribute(
      "style",
      "width: " + pixelSize + "px; height: " + pixelSize + "px;"
    );
    newSquare.style.width = pixelSize + "px";
    newSquare.style.height = pixelSize + "px";
    //append to row that was just created
    newRow.appendChild(newSquare);
  }
  gridContainer.appendChild(newRow);
};

//function creates whole grid
let createGrid = (desiredWidth, pixelSize) => {
  for (let i = 1; i <= desiredWidth; i++) {
    createRow(desiredWidth, "row-" + i, pixelSize);
  }
};


//if user clicks 16x16
const resize16 = document.getElementById("sixteen-size");
resize16.addEventListener("click", () => {
  //here we are making sure that the webpage has no div
  gridContainer.innerHTML = "";
  console.log("Resizing grid to 16x16.");
  createGrid(16, 20);
  //event handling here
  const pixels = document.querySelectorAll(".square");

  // we use the .forEach method to iterate through each square
  pixels.forEach((square) => {
    // and for each one we add a hover listener
    square.addEventListener("mouseover", () => {
      console.log("coloring square");
      square.setAttribute(
        "style",
        "background-color: black; width: 20px; height 20px;"
      );
    });
  });
  //handle the event where user wants to reset color of grid
  const reset = document.querySelector("#reset-button");
  reset.addEventListener("click", () => {
    pixels.forEach((square) => {
      square.setAttribute(
        "style",
        "background-color: white; width: 20px; height 20px;"
      );
    });
  });
});

//if user clicks 64x64
const resize64 = document.getElementById("sixtyfour-size");
resize64.addEventListener("click", () => {
  //here we are making sure that the webpage has no div
  gridContainer.innerHTML = "";
  console.log("Resizing grid to 64x64.");
  createGrid(64, 6);
  //event handling here
  const pixels = document.querySelectorAll(".square");

  // we use the .forEach method to iterate through each square
  pixels.forEach((square) => {
    // and for each one we add a mousehover listener
    square.addEventListener("mouseover", () => {
      console.log("coloring square");
      square.setAttribute(
        "style",
        "background-color: black; width: 6px; height 6px;"
      );
    });
  });
  //handle the event where user wants to reset color of grid
  const reset = document.querySelector("#reset-button");
  reset.addEventListener("click", () => {
    pixels.forEach((square) => {
      square.setAttribute(
        "style",
        "background-color: white; width: 6px; height 6px;"
      );
    });
  });
});
