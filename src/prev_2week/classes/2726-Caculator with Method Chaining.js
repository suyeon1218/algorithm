/*
  * explain
  Design a Caclulator class. 
  The class should provide the mathematical operations of addition, subtraction, multiplication, division, and exponentitation.
  It should also allow consecutive operations to be performed using method chaining.
  The caculator class constructor should accept a number which serves as the initial value of result.
*/


class Calculator {
  constructor(value) {
    this.value = value;
    return this.value;
  }

  add(value){
    this.value += value;
    return this;
  }

  subtract(value){
    this.value -= value;
    return this;
  }

  multiply(value) {
    this.value *= value;
    return this;
  }

  divide(value) {
    if (value === 0) {
      throw new Error('Division by zero is not allowed');
    }
    this.value /= value;
    return this;
  }
  
  power(value) {
    this.value = this.value ** value;
    return this;
  }
    
  getResult() {
   return this.value;
  }
}

console.log(new Calculator(10).add(5).subtract(7).getResult());