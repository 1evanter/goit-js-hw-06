const rangeInputEl = document.querySelector('#font-size-control');
const inputTextEl = document.querySelector('#text');

rangeInputEl.addEventListener('input', event => {
    inputTextEl.style.fontSize = rangeInputEl.value + 'px';
});