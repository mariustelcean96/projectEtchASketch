const FlexContainer = document.querySelector('.flex-container');

/* Constructing the container shape */

function drawGrid(squareNum) {
  for (let i = 1; i <= squareNum*squareNum; i++) {
    const div = document.createElement('div');
    div.style.cssText = `width: ${256/squareNum}px; height: ${256/squareNum}px`;
    div.textContent = '';
    div.classList.toggle('flexItem');
    FlexContainer.appendChild(div);
    }
}
drawGrid(16);

/* Adding the mouseover behaviour to the flex items */

function addHoverBehaviour(color) {
  const divs = document.querySelectorAll('.flexItem');
  divs.forEach((div) => {
  div.addEventListener('mouseover', (e) => {
    div.style.cssText += `background-color: ${color}`;
    });
  });
}
addHoverBehaviour('red');

function promptUser() {
  let promptValue;
  do {
    promptValue = parseInt(prompt('How many squares should be on one side of the array? (Positive whole number, bigger than 4)', '32')); 
    } while (promptValue < 4 || promptValue > 100)
  squareNum = promptValue;
  return squareNum;
}

/* Resetting the grid for a fresh start */

function resetGrid() {
  const FlexContainer = document.querySelector('.flex-container');
  FlexContainer.innerHTML = "";
  const squareNum = promptUser();
  drawGrid(squareNum);
  addHoverBehaviour('red');
}

const resetButton = document.querySelector('#resetButton');
resetButton.addEventListener('click', resetGrid);

const colorButton = document.querySelector('#colorButton');
colorButton.addEventListener('click', (e) => {
    addHoverBehaviour(e.target.value);
});
colorButton.addEventListener('change', (e) => {
    addHoverBehaviour(e.target.value);
});