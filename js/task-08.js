const btnRender = document.querySelector("[data-action='render']");
const btnClear = document.querySelector("[data-action='destroy']");
const divBox = document.querySelector('#boxes');

const input = document.querySelector('input');
const min = +input.getAttribute('min');
const max = +input.getAttribute('max');
const step = +input.getAttribute('step');

btnRender.addEventListener('click', render);
btnClear.addEventListener('click', clear);

let  size = 30;

function render() {
    
    let divArray = [];
    if (+input.value > min || +input.value <= max) {
        for (let i=0; i < +input.value; i += step) {
            const divEl = document.createElement('div');
            divEl.style.backgroundColor = createRandom();
            divEl.style.width = size + 'px';
            divEl.style.height = size + 'px';
            size += 10;

            divArray.push(divEl);
        }
        divBox.append(...divArray);
    }
}

function createRandom() {
    return `rgb(${(Math.random()*255) << 0}, ${(Math.random()*255) << 0}, ${(Math.random()*255) << 0})`;
}

function clear() {
    size = 30;
    divBox.innerHTML = '';
    input.value = '';
}
































// const numInput = document.querySelector('input[type="number"]');
// const btnRender = document.querySelector('button[data-action="render"]');
// const btnClear = document.querySelector('button[data-action="destroy"]');
// const boxGallery = document.querySelector('div#doxes');

// let defaults = 30;

// const handBtnRenderClick = () => {
//     const amount = +numInput.value;
//     createBoxes(amount);
// }

// const createBoxes = (amount) => {
//     const collection = [];
//     for (let i = 0; i < amount; i += 1) {
//         const div = document.createElement('div');
//         div.style.backgroundColor = createRandom();
//         div.style.width = defaults + 'px';
//         div.style.height = defaults + 'px';
//         defaults += 10;

//         collection.push(div);

//     }
//     boxGallery.append(...collection);
// }

// const handBtnClearClick = () => {
//     boxGallery.innerHTML = '';
//     defaults = 30;
//     numInput.value = 0;
// }

// function createRandom() {
//     return `rgb(${(Math.random()*255) << 0}, ${(Math.random()*255) << 0}, ${(Math.random()*255) << 0})`;
// }

// btnRender.addEventListener('click', handBtnRenderClick);
// btnClear.addEventListener('click', handBtnClearClick);