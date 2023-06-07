function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changecolorBtnEl = document.querySelector('.change-color');
const bodyEl = document.querySelector('body');
const colorTextEl = document.querySelector('.color');

changecolorBtnEl.addEventListener('click', () => {
  bodyEl.style.backgroundColor = getRandomHexColor();
  colorTextEl.textContent = `${bodyEl.style.backgroundColor}`;
})