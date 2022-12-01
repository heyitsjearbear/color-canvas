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
//function will style button when it is enabled
let buttonEnabled = (button) => {
  button.setAttribute("style", "background-color: #007CC7");
};
let buttonDisabled = (button) => {
  button.setAttribute("style", "background-color: white");
};

const defaultColor = document.querySelector("#default-color");
const rainbowColor = document.querySelector("#rainbow-color");
let controlFunctionality = (pixelSize) => {
  defaultColorSelected = false;
  //here we initalize rest of the buttons to be false since they aren't clicked
  //when website is first loaded
  rainbowColorSelected = false;
  sixteenResizeSelected = false;
  sixtyfourResizeSelected = false;
  //on button click for rainbow mode, turn off default and turn on rainbow mode

  rainbowColor.addEventListener("click", () => {
    console.log("rainbow mode selected");
    rainbowColorSelected = true;
    defaultColorSelected = false;
    if (rainbowColorSelected == true) {
      buttonEnabled(rainbowColor);
      buttonDisabled(defaultColor);
    } else {
      buttonEnabled(defaultColor);
      buttonDisabled(rainbowColor);
    }
  });
  //opposite logic for clicking on default color

  defaultColor.addEventListener("click", () => {
    console.log("default mode selected");
    rainbowColorSelected = false;
    defaultColorSelected = true;
    if (defaultColorSelected == true) {
      buttonEnabled(defaultColor);
      buttonDisabled(rainbowColor);
    } else {
      buttonEnabled(rainbowColor);
      buttonDisabled(defaultColor);
    }
  });
  //event handling here
  const pixels = document.querySelectorAll(".square");
  // we use the .forEach method to iterate through each square
  pixels.forEach((square) => {
    drag = false;
    window.addEventListener("mousedown", () => {
      drag = true;
    });
    window.addEventListener("mouseup", () => {
      drag = false;
    });
    // and for each one we add a hover listener
    square.addEventListener("mouseover", () => {
      if (drag == true) {
        console.log("coloring square");
        if (rainbowColorSelected == true) {
          square.setAttribute(
            "style",
            `background-color: rgb(${getRandomRGBValue(
              0,
              256
            )}, ${getRandomRGBValue(0, 256)}, ${getRandomRGBValue(
              0,
              256
            )}); width: ${pixelSize}px; height: ${pixelSize}px;`
          );
        } else {
          square.setAttribute(
            "style",
            `background-color: black; width: ${pixelSize}px; height: ${pixelSize}px;`
          );
        }
      }
      yesColor = false;
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

const resize16 = document.getElementById("sixteen-size");
const resize64 = document.getElementById("sixtyfour-size");

//resize grid to 16x16
resize16.addEventListener("click", () => {
  buttonEnabled(defaultColor);
  buttonDisabled(rainbowColor);
  sixteenResizeSelected = true;
  sixtyfourResizeSelected = false;
  if (sixteenResizeSelected == true) {
    buttonEnabled(resize16);
    buttonDisabled(resize64);
  } else {
    buttonEnabled(resize64);
    buttonDisabled(resize16);
  }
  //here we are making sure that the webpage has no div
  gridContainer.innerHTML = "";
  createGrid(16, 20);
  controlFunctionality(20);
});

//resize grid to 64x64
resize64.addEventListener("click", () => {
  buttonEnabled(defaultColor);
  buttonDisabled(rainbowColor);
  sixteenResizeSelected = false;
  sixtyfourResizeSelected = true;
  if (sixtyfourResizeSelected == true) {
    buttonEnabled(resize64);
    buttonDisabled(resize16);
  } else {
    buttonEnabled(resize16);
    buttonDisabled(resize64);
  }
  //here we are making sure that the webpage has no div
  gridContainer.innerHTML = "";
  createGrid(64, 6);
  controlFunctionality(6);
});
