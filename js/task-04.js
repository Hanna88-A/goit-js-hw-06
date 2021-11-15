const buttons = document.querySelectorAll('#counter button');
console.log(buttons);
const value = document.querySelector('#value');
console.log(value);

let counterValue = 0;

const onHandleClickDecrement = event => {
    
    if (counterValue !== 0) {
        value.textContent = counterValue -= 1;
    }
    
};

const onHandleClickIncrement = event => {
    value.textContent = counterValue += 1;
};

buttons[0].addEventListener("click", onHandleClickDecrement);
buttons[1].addEventListener("click", onHandleClickIncrement );