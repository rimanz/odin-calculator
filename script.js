// Main object:
const calculator = {
    a: null,    // first operand
    b: null,    // second operand
    operator: null,
    result: 0,

    operate() {
        switch (this.operator) {
            case '+':
                this.result = this.a + this.b;
                break;
            case '-':
                this.result = this.a - this.b;
                break;
            case '*':
                this.result = this.a * this.b;
                break;
            case '/':
                this.result = this.a / this.b;
                break;
        }
        this.a = this.result;
        this.b = null;
    },

    reset() {
        this.a = null;
        this.b = null;
        this.result = 0;
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
        case 'number':
            updateDisplay(keyLabel);
            break;
        case 'operator':
            handleOperators(keyLabel);
            break;
    }
}

function updateDisplay(content) {
    if (calculator.a === calculator.result) {
        if (content === '.') content = '0.';
        display.textContent = content;
        calculator.result = display.textContent;
    } else {
        if (content === '.') {
            handleDot();
        } else {
            display.textContent = Number(display.textContent + content);
        }
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

function handleOperators(label) {
    let operator;
    switch (label) {
        case '+':
            operator = '+';
            break;
        case '−':
            operator = '-';
            break;
        case '×':
            operator = '*';
            break;
        case '÷':
            operator = '/';
            break;
    }

    if(calculator.a === null && calculator.b === null)  {
        calculator.a = Number(display.textContent);
        calculator.result = calculator.a;
        calculator.operator = operator;
        console.log(calculator);
    } else if (calculator.a !== null) {
        calculator.b = Number(display.textContent);
        calculator.operate();
        calculator.operator = operator  ;
        display.textContent = calculator.result;
        console.log(calculator);
    } else {
        display.textContent = 'Error!';
        console.log(calculator);
    }
}