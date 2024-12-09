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
            // Perform some action according to the button.
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
            break;
    }
}

function addToDisplay(digit) {
    console.log(display.textContent);
    display.textContent = Number(display.textContent + digit);
}