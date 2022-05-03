"use strict";

const errorCounter = 0;
for (let i = 0; i < lettersArray.length; i++) {
  console.log(lettersArray[i]);
  if (lettersArray[i] === guessLetter) {
    guionesArray[i] = guessLetter;
  } else {
    errorCounter += 1;
  }
}
