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
    e.target.style.backgroundColor = `${color}`;
    });
  });
}
//addHoverBehaviour('red');

/* Prompt the user for the new number of squares/ side of the grid */

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

/* Implement the range type input */

const squareRangeSpan = document.querySelector('#squareRangeValue');
const squareRange = document.querySelector('#squares');
squareRangeSpan.textContent = squareRange.value;
squareRange.addEventListener('change', (e) => {
  squareRangeSpan.textContent = e.target.value;
  const FlexContainer = document.querySelector('.flex-container');
  FlexContainer.innerHTML = "";
  drawGrid(e.target.value);
  addHoverBehaviour('red');
});

/* Generate random RGB (0 – 255) values */

function generateRGBValues() {
  let redValue = Math.round(Math.random() * 255); //If I judged correctly, this can generate values from 0 to 255, inclusively.
  let greenValue = Math.round(Math.random() * 255);
  let blueValue = Math.round(Math.random() * 255);
  const randomRGBColor = [redValue, greenValue, blueValue]; 
  return randomRGBColor;
}
generateRGBValues();

/* Color using random RGB */

const RGBMode = document.querySelector('#RGBColor');
RGBMode.addEventListener('click', () => {
  const divs = document.querySelectorAll('.flexItem');
  divs.forEach((div) => {
  div.addEventListener('mouseover', (e) => {
    let randomRGBColor = generateRGBValues();
    e.target.style.backgroundColor = `rgb(${randomRGBColor[0]}, ${randomRGBColor[1]}, ${randomRGBColor[2]})`;
    });
  });
});

/* Implement the erase button*/

const eraserButton = document.querySelector('#eraser');
eraserButton.addEventListener('click', eraseColor);

function eraseColor() {
  const divs = document.querySelectorAll('.flexItem');
  divs.forEach((div) => {
    div.addEventListener('mouseover', (e) => {
      e.target.style.backgroundColor = 'transparent';
    });
  });
}

/* Pre-color the grid using rgba color system */

function preColorGrid(color) {
  const divs = document.querySelectorAll('.flexItem');
  divs.forEach((div) => { 
    div.style.backgroundColor = color;
  });
}

/* Implement the shading functionality */

const shadingButton = document.querySelector('#shading');
shadingButton.addEventListener('click', shadeGrid); 

function shadeGrid() {
  preColorGrid('rgba(0,0,0,0)');
  const divs = document.querySelectorAll('.flexItem');
  divs.forEach((div) => {
  div.addEventListener('mouseover', (e) => {
    let divColor = div.style.backgroundColor;
    let opacityString = divColor.split(" ")[3]; //ali-h-s21
    let opacity = parseFloat(opacityString);
    console.log(opacity);
    if (opacity === 0) {
      e.target.style.backgroundColor = 'rgba(0,0,0,0.1)';
    } else if (opacity >= 0.1 && opacity <= 0.9) {
      e.target.style.backgroundColor = `rgba(0,0,0,${opacity + 0.1})`;// after 0.9 it displays NaN
    }
  });
  });
}
