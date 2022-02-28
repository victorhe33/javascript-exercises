const ftoc = function(fTemp) {
  let convTemp = (fTemp - 32) * (5/9);
  let finalTemp = convTemp;
  
  if (convTemp % 1 !== 0) {
    finalTemp = Number(finalTemp.toFixed(1));
  }
  
  return finalTemp;
};

const ctof = function(cTemp) {
  let convTemp = cTemp * (9/5) + 32;
  let finalTemp = convTemp;

  if (convTemp % 1 !== 0 ) {
    finalTemp = Number(convTemp.toFixed(1));
  }

  return finalTemp;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
