//grab the container that we will eventually append to
const gridContainer = document.querySelector('.grid');

//for loop to make 4x4(16 divs)
for (let i = 1; i <= 256; i++){
    //create div referenced by newSquare
    let newSquare = document.createElement('div');
    newSquare.id = i;
    newSquare.classList.add('square');
    newSquare.textContent = i;
    gridContainer.appendChild(newSquare);
}