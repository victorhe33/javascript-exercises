const removeFromArray = function(array) {
  let targetIndex;
  
  //cool loop going through parameter arguments using arguments object..
  for (i = 1; i < arguments.length; i++) {
  let currArg = arguments[i];
    if (currArg !== undefined 
      && array.includes(currArg)) {
      targetIndex = array.indexOf(currArg);
      array.splice(targetIndex, 1);
    }
  }
  
  return array;
};

//Solution via looping through parameter arguments via arguments object
// const removeFromArray = function (array) {
//   let targetIndex;

//   //cool loop going through parameter arguments using arguments object..
//   for (i = 1; i < arguments.length; i++) {
//     let currArg = arguments[i];
//     if (currArg !== undefined
//       && array.includes(currArg)) {
//       targetIndex = array.indexOf(currArg);
//       array.splice(targetIndex, 1);
//     }
//   }

//   return array;
// };

//Deleted my old solution of just defining lots of parameters;

// [1, 2, 3, 4], 3)
// Do not edit below this line
module.exports = removeFromArray;
