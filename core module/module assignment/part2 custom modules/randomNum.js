// Create a custom module to generate a random number between a given range.

export const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const getRandomNum = randomNumber(0, 10);

console.log(getRandomNum);
