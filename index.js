export const calc = (initValue) => {
  let result = initValue;

  const calculator = {
    add(value) {
      result += value;
      return this;
    },

    mult(value) {
      result *= value;
      return this;
    },

    substract(value) {
      result -= value;
      return this;
    },

    div(value) {
      result /= value;
      return this;
    },

    result() {
      return result;
    },
  };

  return calculator;
};

const result = calc(3).add(2).mult(4).div(10).substract(5).result()
console.log(result)

const result2 = calc(3).add(2).substract(5).div(10).mult(4).result();
console.log(result2)

const result3 = calc(3).substract(5).add(2).div(10).mult(4).result();
console.log(result3)

console.log(calc(3).substract(1).result())

const result4 = calc(3).div(10).mult(4).substract(5).add(2).result();
console.log(result4);