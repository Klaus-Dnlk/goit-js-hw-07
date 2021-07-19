let counterValue = 0;

const [decrement, span, increment] = document.querySelector('#counter').children;

decrement.onclick = function(){
    counterValue -= 1;
    span.textContent = counterValue;
}

increment.onclick = function(){
    counterValue += 1;
    span.textContent = counterValue;
}