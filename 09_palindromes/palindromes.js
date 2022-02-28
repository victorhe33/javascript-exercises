const palindromes = function (string) {
  let newString = string.toLowerCase();
  let newStringArray = newString.split("");
  let punctuationArray = ["!", ".", ",", " "];

  const cleanArray = newStringArray.filter(element => { 
    return !punctuationArray.includes(element);
  });

  let finalString = cleanArray.join("");
  let reverseString = cleanArray.reverse().join("");

  return finalString === reverseString;
};


// const palindromes = function (string) {
//   let newString = string.toLowerCase();
//   let newStringArray = newString.split("");
//   let finalString = "";
  
//   //clean off punctuation
//   let punctuationArray = ["!", ".", ",", " "]
//   for (let element of newStringArray) {
//     if (!punctuationArray.includes(element)) {
//       finalString += element;
//     }
//   }

//   let reverseString = finalString.split("").reverse().join("");
  
//   return finalString === reverseString;
// };

//OFFICAL ANSWER****

// const palindromes = function (string) {
//   processedString = string.toLowerCase().replace(/[^A-Za-z]/g, "");
//   return (
//     processedString
//       .split("")
//       .reverse()
//       .join("") == processedString
//   );
// };


// Do not edit below this line
module.exports = palindromes;
