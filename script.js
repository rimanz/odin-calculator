// Main object:
const calculator = {
    a: null,    // first operand
    b: null,    // second operand
    operator: null,
    displayValue: 0,

    operate() {
        let result;
        switch (this.operator) {
            case '+':
                result = this.a + this.b;
                break;
            case '-':
                result = this.a - this.b;
                break;
            case '*':
                result = this.a * this.b;
                break;
            case '/':
                result = this.a / this.b;
                break;
        }
        this.displayValue = result;
        this.a = result;
        this.b = null;
    },

    reset() {
        this.a = null;
        this.b = null;
        this.displayValue = 0;
        this.operator = null;
    }
}

// DOM elements and Event listeners:
const display = document.querySelector('.display');
const keypad = document.querySelector('.keypad');

keypad.addEventListener('click', handleClick);

// Function declarations:
function handleClick(event) {
    const key = event.target;
    const keyType = key.getAttribute('data-key-type');
    const keyLabel = key.textContent;

    switch (keyType) {
        case 'action':
            handleActionKeys(keyLabel);
            break;
        case 'dot':
            handleDot();
            break;
        case 'number':
            updateDisplay(keyLabel);
        case 'operator':
            // Work-in-Progress
    }
}

function updateDisplay(content) {
    // Work-in-Progress
    if (calculator.a === calculator.displayValue) {
        display.textContent = content;
    } else {
        display.textContent = Number(display.textContent + content);
    }
}

function handleActionKeys(label) {
    switch (label) {
        case 'AC':
            display.textContent = 0;
            calculator.reset();
            break;
        case 'C':
            display.textContent = 0;
            break;
        case '←':
            let content = display.textContent;
            display.textContent = content.slice(0, content.length - 1);
            if(display.textContent === '') display.textContent = 0;
            break;
    }
}

function handleDot() {
    if(!(display.textContent.includes('.'))) {
        display.textContent += '.';
    }
}