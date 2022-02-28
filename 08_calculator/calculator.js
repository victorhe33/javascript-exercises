const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	let sum = 0;
  for(let element of array) {
    sum += element;
  }

  return sum;
};

const multiply = function(array) {
  let total = 1
  for (let element of array) {
    total *= element;
  }

  return total;
};

const power = function(a, b) {
	let result = 1;

  for (let i = 1; i <= b; i++) {
    result *= a;
  }

  return result;
};

const factorial = function(number) {
	let result = 1;
  
  while (number > 1) {
    result *= number;

    number--;
  }

  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
