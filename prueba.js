"use strict";
//aray de palabras random
const palabras = [
  "sanguijuela",
  "electrocardiograma",
  "cocodrilo",
  "emparedado",
  "lavadora",
  "patata",
  "camioneta",
  "brazo",
  "holograma",
];

const random = Math.floor(Math.random() * palabras.length);

const secretWord = palabras[random]; //secretWord es la palabra random que tiene que aparecer en el texto

const lettersArray = []; // ["m", "e", "s", "a"](esta no aparece en pantalla) [-,-,s,a](si aparece en pantalla) usserLetter ="a" contador(imagen)=1
for (let i = 0; i < secretWord.length; i++) {
  console.log(secretWord[i]);

  lettersArray.push(secretWord[i]);
}
console.log(lettersArray.length);
console.log(secretWord.length);

const main = document.querySelector("main");

const guionesArray = [];
for (let i = 0; i < secretWord.length; i++) {
  const p = document.createElement("p");
  main.append(p);
  p.textContent = "_";
  guionesArray.push(p.textContent);
}

const guessLetter = "m";

if (guessLetter === lettersArray[0]) {
  guionesArray[0] = guessLetter;
}

guinesArray[2] = "m";
console.log(guionesArray);

const secretArrayDisplay = [secretWord.length.replace("_")];
document.querySelector("#palabraSecreta").textContent = secretArrayDisplay; //aca estoy indicando que la palabra secreta va en el parrafo.
console.log(secretArrayDisplay);
//Se trabajará comparando e iterando lettersArray en función a la letra que pone usuario
const userLetter = document.querySelector("#input").value;
for (let letter of lettersArray) {
  if (userLetter === letter) {
    //aquí cambiamos el array que se muestra en pantalla (displayArray) displayArray[i] === letra
  }
}

console.log(userLetter);
//Crear en html una sección (un displayArray?) con los mismos caracteres (secretWord.length) que secretWord
