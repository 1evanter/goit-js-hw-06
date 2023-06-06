function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
inputEl: document.querySelector('#controls input'),
createBtnEl: document.querySelector('[data-create]'),
  destroyBtnEl: document.querySelector('[data-destroy]'),
  boxesEl: document.querySelector('#boxes'),
}

refs.createBtnEl.addEventListener('click', handleBoxCreate);

function handleBoxCreate() {
  for (let i = 0; i < refs.inputEl.value; i += 1) {
    const newBox = document.createElement('div');
    refs.boxesEl.append(newBox);

    newBox.style.backgroundColor = getRandomHexColor();
    newBox.style.width = 60 +"px";
    newBox.style.height = 60 +"px";
  }
}
  
refs.destroyBtnEl.addEventListener('click', handleBoxDestroy);

function handleBoxDestroy() {
  refs.boxesEl.innerHTML = '';
  refs.inputEl.value = '';
}
