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