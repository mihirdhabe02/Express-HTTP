class Calculator {
    constructor() {
        this.result = 0;
    }
    add(number) {
        return number + this.result;
    }
    subtract(number) {
        return this.result - number;
    }
    multiply(number) {
        return number * this.result;
    }
    divide(number) {
        if (number === 0)
            throw new Error("Cannot divide by 0");

        return this.result / number;
    }
    clear() {
        this.result = 0;
    }
    getResult() {
        return this.result;
    }
    calculate(str) {
        // Validate the expression for non-numerical characters
        if (!/^[0-9+\-*/().]+$/.test(str.replace(/\s+/g, ''))) {
            throw new Error("Invalid characters in expression");
        }
        try {
            this.result = eval(str);
        } catch (error) {
            if (error instanceof SyntaxError || error instanceof ReferenceError)
                throw new Error("Invalid Expression");
            throw error;
        }
    }
}

// Testing the Calculator class
const calculator = new Calculator();
calculator.calculate("10 + 2 * (6 - (4 + 1) / 2) + 7");
console.log("Result:", calculator.getResult());
