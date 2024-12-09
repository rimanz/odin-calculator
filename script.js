const calculator = new function() {
    this.a = null;  // first operand
    this.b = null;  // second operand
    this.operator = null;   // operator

    // Arithmetic methods:
    this.add = () => this.a + this.b;
    this.subtract = () => this.a - this.b;
    this.multiply = () => this.a * this.b;
    this.divide = () => (this.a / this.b).toFixed(2);

    // Operational methods:
    this.operate = () => {
        switch (this.operator) {
            case '+':
                return this.add();
            case '−':
                return this.subtract();
            case '×':
                return this.multiply();
            case '÷':
                return this.divide();
        }
    }

    this.reset = () => {
        this.a = null;
        this.b = null;
        this.operator = null;
    }
}

// DOM Elements and Event Listeners:
const display = document.querySelector('.display');
const keypad = document.querySelector('.keypad');

keypad.addEventListener('click', handleClick);

// Functions:
function handleClick(event) {
    const key = event.target;
    const keyValue = key.textContent;
    const keyType = key.getAttribute('data-key-type');
    console.log(key, keyValue, keyType);

    switch (keyType) {
        case 'action':
            switch (keyValue) {
                case 'AC':
                    reset();
                    break;
                case 'C':
                    clearDisplay();
                    break;
                case '←':
                    clearLastDigit();
                    break;
            }
            break;
        case 'number':
            addToDisplay(keyValue);
            break;
        case 'operator':
            /*  if both operands exist:
                    perform operation based on previous operator value.
                    and display the value
                    and update first operand with display value.
                    update operator with keyValue
                    clear second operand
                else if only first operand exists:
                    update operator with keyValue
                    update second operand with display value
                else if no operands defined:
                    update first operand with display value
                    update operator with keyValue
            */
            if ((calculator.a !== null) && (calculator.b !== null)) {
                let result = calculator.operate();
                display.textContent = result;
                calculator.a = result;
                calculator.b = null;
                calculator.operator = keyValue;
            } else if ((calculator.a !== null) && (calculator.b === null)) {
                calculator.b = display.textContent;
                calculator.operator = keyValue;
            } else if ((calculator.a === null) && (calculator.b === null)) {
                calculator.a = display.textContent;
                calculator.operator = keyValue;
            }
            break;
    }
}

function addToDisplay(digit) {
    console.log(display.textContent);
    display.textContent = Number(display.textContent + digit);
}

function clearDisplay() {
    display.textContent = 0;
}

function clearLastDigit() {
    const length = display.textContent.length;
    display.textContent = display.textContent.slice(0, length-1);
    if (display.textContent === '') display.textContent = 0;
}

function reset() {
    calculator.reset();
    clearDisplay();
}