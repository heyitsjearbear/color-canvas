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
  console.log(`Resizing grid to ${desiredWidth}x${desiredWidth}`);
  for (let i = 1; i <= desiredWidth; i++) {
    createRow(desiredWidth, "row-" + i, pixelSize);
  }
};
let getRandomRGBValue = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
};
let controlFunctionality = (pixelSize) => {
  //on website load select black color as default link
  defaultColorSelected = true;
  rainbowColorSelected = false;
  //on button click for rainbow mode, turn off default and turn on rainbow mode
  const rainbowColor = document.querySelector("#rainbow-color");
  rainbowColor.addEventListener("click", () => {
    rainbowColorSelected = true;
    defaultColorSelected = false;
    console.log("rainbow mode selected");
  });
  //opposite logic for clicking on default color
  const defaultColor = document.querySelector("#default-color");
  defaultColor.addEventListener("click", () => {
    rainbowColorSelected = false;
    defaultColorSelected = true;
    console.log("default mode selected");
  });
  //event handling here
  const pixels = document.querySelectorAll(".square");
  // we use the .forEach method to iterate through each square
  pixels.forEach((square) => {
    // and for each one we add a hover listener
    square.addEventListener("mouseover", () => {
      console.log("coloring square");
      if (rainbowColorSelected==true) {
        square.setAttribute(
          "style",
          `background-color: rgb(${getRandomRGBValue(0,256)}, ${getRandomRGBValue(0,256)}, ${getRandomRGBValue(0,256)}); width: ${pixelSize}px; height: ${pixelSize}px;`
        );
      }
      else {
        square.setAttribute(
          "style",
          `background-color: black; width: ${pixelSize}px; height: ${pixelSize}px;`
        );
      }
    });
  });
  //handle the event where user wants to reset color of grid
  const reset = document.querySelector("#reset-button");
  reset.addEventListener("click", () => {
    pixels.forEach((square) => {
      square.setAttribute(
        "style",
        `background-color: white; width: ${pixelSize}px; height: ${pixelSize}px;`
      );
    });
  });
};

//resize grid to 16x16
const resize16 = document.getElementById("sixteen-size");
resize16.addEventListener("click", () => {
  //here we are making sure that the webpage has no div
  gridContainer.innerHTML = "";
  createGrid(16, 20);
  controlFunctionality(20);
});

//resize grid to 64x64
const resize64 = document.getElementById("sixtyfour-size");
resize64.addEventListener("click", () => {
  //here we are making sure that the webpage has no div
  gridContainer.innerHTML = "";
  createGrid(64, 6);
  controlFunctionality(6);
});
