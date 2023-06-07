const rangeInputEl = document.querySelector('#font-size-control');
const inputTextEl = document.querySelector('#text');

inputTextEl.style.fontSize = rangeInputEl.value + 'px';

rangeInputEl.addEventListener('input', event => {
    inputTextEl.style.fontSize = rangeInputEl.value + 'px';
});