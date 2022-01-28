const FlexContainer = document.querySelector('.flex-container');

/* Constructing the container shape */

function drawGrid() {
  for (let i = 0; i < 256; i++) {
    const div = document.createElement('div');
    div.style.cssText = `width: 16px; height: 16px;`;
    div.textContent = '.';
    div.classList.toggle('flexItem');
    FlexContainer.appendChild(div);
    }
}
drawGrid();

const divs = document.querySelectorAll('.flexItem');
divs.forEach((div) => {
div.addEventListener('mouseover', (e) => {
  div.style.cssText += 'background-color: red';
  });
});

function resetGrid() {
    const divs = document.querySelectorAll('.flexItem');
    divs.forEach((div) => {
      div.style.cssText = 'width: 16px; height: 16px; background-color: transparent';  
    });
}

const resetButton = document.querySelector('#resetButton');
resetButton.addEventListener('click', resetGrid);