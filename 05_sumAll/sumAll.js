const sumAll = function(startNum, endNum) {
  let result = 0;
  
  if (startNum < 0 
    || endNum < 0 
    || typeof startNum !== "number"
    || typeof endNum !== "number") {
    return "ERROR";
  }

  if (endNum > startNum) {
    for (let i = startNum; i <= endNum; i++) {
      result += i;
    }
  } else {
    for (let i = endNum; i <= startNum; i++) {
      result += i;
    }
  }

  return result;
};

// Do not edit below this line
module.exports = sumAll;
