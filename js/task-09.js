function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changecolorBtnEl = document.querySelector('.change-color');
const widgetEl = document.querySelector('.widget');
const colorTextEl = document.querySelector('.color');

changecolorBtnEl.addEventListener('click', () => {
  widgetEl.style.backgroundColor = getRandomHexColor();
  colorTextEl.textContent = `${widgetEl.style.backgroundColor}`;
})