//SOLUTION
const fibonacci = function (num) {
  //exclusion
  if (num < 0) {
    return "OOPS";
  }
  num = +num;
  //start fibonacci
  let a = 1;
  let b = 1;
  for (let i = 1; i < num - 1; i++) {
    const temp = b;
    b = a + b;
    a = temp;

  }
  
  return b;
};

//SOLUTION via loop
// const fibonacci = function(num) {
//   //exclusion
//   if (num < 0) {
//     return "OOPS";
//   }
//   num = +num;
//   //start fibonacci
//   let fibArray = [1, 1];

//   for (let i = 3; i <= num; i++) {
//     let firstNum = fibArray[i-3];
//     let secondNum = fibArray[i-2];
//     let currSum = firstNum + secondNum;

//     fibArray.push(currSum);
//   }

//   return fibArray[num-1];
// };

// Do not edit below this line
module.exports = fibonacci;
