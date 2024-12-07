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