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
    }
}

// DOM elements and Event listeners:
const display = document.querySelector('.display');
const keypad = document.querySelector('.keypad');

keypad.addEventListener('click', handleClick);

// Function declarations:
function handleClick(event) {
    const key = event.target;
    const value = key.textContent;
}