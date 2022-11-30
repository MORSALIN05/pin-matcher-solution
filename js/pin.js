function pinGenerate() {
    const pin = getPin();
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    }
    else {
        return pinGenerate();
    }
}
function getPin() {
    const random = Math.round(Math.random() * 10000);
    return random;
}

document.getElementById('generate-btn').addEventListener('click', function () {
    const pinField = document.getElementById('pin-field');
    const pinBefore = pinGenerate();
    pinField.value = pinBefore;
})
document.getElementById('calc-row-btn').addEventListener('click', function () {
    const number = event.target.innerText;
    //const number = btnNumber.
    //const number = document.getElementById('calc-row-btn').innerText;
    const typedInputValue = document.getElementById('input-value'); //const work all block here bcz its in a function.
    const previousInputValue = typedInputValue.value;
    if (isNaN(number)) {
        if (number === 'C') {
            typedInputValue.value = '';
        }
        if (number === '<') {
            //console.log(typedInputValue.value);
            const digits = previousInputValue.split('');
            digits.pop();
            const remainDigits = digits.join('');
            typedInputValue.value = remainDigits;
        }
    }
    else {

        const previousInputValue = typedInputValue.value;
        const newInputValue = previousInputValue + number;
        typedInputValue.value = newInputValue;
    }

})
document.getElementById('submit-button').addEventListener('click', function () {
    const pinField = document.getElementById('pin-field').value;
    const typedInputValue = document.getElementById('input-value').value;
    if (pinField === typedInputValue) {
        const succedNotify = document.getElementById('succed-notify');
        succedNotify.style.display = 'block';
    }
    else {
        console.log('Not match');
    }
})