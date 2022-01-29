const FlexContainer = document.querySelector('.flex-container');
/* Constructing the container shape */

function drawGrid(squareNum) {
  for (let i = 1; i <= squareNum*squareNum; i++) {
    const div = document.createElement('div');
    div.style.cssText = `width: ${FlexContainer.clientWidth/squareNum}px; height: ${FlexContainer.clientHeight/squareNum}px`;
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
    promptValue = parseInt(prompt('How many squares/ side of array? (4 < x < 96 | x % 4 = 0)', '32')); 
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

const squareRangeSpan = document.querySelector('#squareRangeValue');
const squareRange = document.querySelector('#squares');
squareRange.addEventListener('change', (e) => {
  squareRangeSpan.textContent = e.target.value;
  const FlexContainer = document.querySelector('.flex-container');
  FlexContainer.innerHTML = "";
  drawGrid(e.target.value);
  addHoverBehaviour('red');
})