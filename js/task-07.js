const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

function changeSize (event) {
    const fontSize = Number(event.currentTarget.value)
    textEl.setAttribute("style", `font-size: ${fontSize}`)
}

const changedFontSize = inputEl.addEventListener('input', changeSize);