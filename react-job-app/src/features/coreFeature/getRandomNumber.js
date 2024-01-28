// The function used to randomize a number in a given range, takes an exception array as its third argument.
export const getRandomIntWithExceptions = (min, max, excludedNumbers) => {
  if (max - min + 1 <= excludedNumbers.length) {
    return null;
  }

  let randomNumber;
  do {
    randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  } while (excludedNumbers.includes(randomNumber));
  
  return randomNumber;
};
