const reverseString = function(str) {
  let finalString = "";

  for (i = str.length - 1; i >= 0; i--) {
    let currChar = str[i];
    finalString += currChar;
  }

  return finalString;
};

// Do not edit below this line
module.exports = reverseString;
