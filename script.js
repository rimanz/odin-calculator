const calculator = new function() {
    this.a = null;  // first operand
    this.b = null;  // second operand
    this.operator = null;

    // Arithmetic methods:
    this.add = () => this.a + this.b;
    this.subtract = () => this.a - this.b;
    this.multiply = () => this.a * this.b;
    this.divide = () => (this.a / this.b).toFixed(2);
}