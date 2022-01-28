const FlexContainer = document.querySelector('.flex-container');

/* Contructing the container shape */

for (let i = 0; i < 10; i++) {
  const div = document.createElement('div');
  div.style.cssText = 'width: 32px; height: 32px; border: 0px solid white';
  div.textContent = 'L';
  FlexContainer.appendChild(div);
}