const FlexContainer = document.querySelector('.flex-container');

/* Constructing the container shape */

function drawGrid(squareNum) {
  for (let i = 1; i <= squareNum*squareNum; i++) {
    const div = document.createElement('div');
    div.style.cssText = `width: ${256/squareNum}px; height: ${256/squareNum}px;`;
    div.textContent = '';
    div.classList.toggle('flexItem');
    FlexContainer.appendChild(div);
    }
}
drawGrid(16);

/* Adding the mouseover behaviour to the flex items */

function addHoverBehaviour() {
  const divs = document.querySelectorAll('.flexItem');
  divs.forEach((div) => {
  div.addEventListener('mouseover', (e) => {
    div.style.cssText += 'background-color: red';
    });
  });
}
addHoverBehaviour();

/* Resetting the grid for a fresh start */

function resetGrid() {
  const divs = document.querySelectorAll('.flexItem');
  divs.forEach((div) => {
    div.style.cssText = 'width: 16px; height: 16px; background-color: transparent';  
  });
  const squareNum = prompt('How many squares should be on one side of the array? (Positive whole number)', '32');
  const FlexContainer = document.querySelector('.flex-container');
  FlexContainer.innerHTML = "";
  drawGrid(squareNum);
  addHoverBehaviour();
}

const resetButton = document.querySelector('#resetButton');
resetButton.addEventListener('click', resetGrid);

const colorButton = document.querySelector('#colorButton');