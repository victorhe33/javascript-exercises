const findTheOldest = function(array) {
  const cleanArray = array.map(person => {
    if (person.yearOfDeath === undefined) {
      person.yearOfDeath = new Date().getFullYear();
    }
    return person;
  });

  const sortedArray = cleanArray.sort(function (first, second) {
    let firstAge = first.yearOfDeath - first.yearOfBirth;
    let secondAge = second.yearOfDeath - second.yearOfBirth;

    if (firstAge > secondAge) {
      return -1;
    } else {
      return 1;
    }
  });
  
  return sortedArray[0];
}

//SOLUTION
// const findTheOldest = function (array) {
//   return array.reduce((oldest, currentPerson) => {
//     const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
//     const currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
//     return oldestAge < currentAge ? currentPerson : oldest;
//   })
// };

// const getAge = function (birth, death) {
//   if (!death) {
//     death = new Date().getFullYear();
//   }
//   return death - birth;
// };

// Do not edit below this line
module.exports = findTheOldest;
