"use strict";
const lettersArray = ["c", "a", "s", "a"];
const guessLetter = "p";
const guionesArray = ["_", "_", "_", "_"];
let errorCounter = 0;

for (let i = 0; i < lettersArray.length; i++) {
  console.log(lettersArray[i]);
  if (lettersArray[i] === guessLetter) {
    guionesArray[i] = guessLetter;
  } else {
    errorCounter = errorCounter += 1 / lettersArray.length;
  }
}
console.log(guionesArray);
console.log(Math.floor(errorCounter));
// let errorCounterTotal = 0;
// let errorCounterTotal = errorCounterTotal + Math.floor(errorCounter);

//Errores
const errorCounterTotal = 6;
if ((errorCounterTotal = 1)) {
  console.log("quedan 5 vidas");
} else if ((errorCounterTotal = 2)) {
  console.log("quedan 4 vidas");
} else if ((errorCounterTotal = 3)) {
  console.log("quedan 3 vidas");
} else if ((errorCounterTotal = 4)) {
  console.log("quedan 2 vidas");
} else if ((errorCounterTotal = 5)) {
  console.log("quedan 1 vidas");
} else if ((errorCounterTotal = 6)) {
  console.log("lo siento, perdiste todas tus vidas");
}
