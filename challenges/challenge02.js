const fs = require('fs');
const message_encoded = fs.readFileSync('encrypted.txt', 'utf-8');

const messageToASCII = (message) => {
  const ASCII_FOR_A = 97;
  const ASCII_FOR_Z = 122;
  let currentValue = '';

  const ascciValues = message.split('').reduce((accum, value) => {
    currentValue += value;

    if (+currentValue >= ASCII_FOR_A && +currentValue <= ASCII_FOR_Z) {
      accum.push(currentValue);
      currentValue = '';
    }

    return accum;
  }, []);

  return ascciValues;
};

const ASCIIToText = (ascciValues) =>
  ascciValues.map((letter) => String.fromCharCode(letter)).join('');

const messageContent = message_encoded
  .split(/\s+/)
  .map((message) => messageToASCII(message))
  .map((ascciValues) => ASCIIToText(ascciValues))
  .join(' ');

console.log({ messageContent });
