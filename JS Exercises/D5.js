/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ["dog", "cat", "hamster", "redfish"];

for (let i = 0; i < pets.length; i++) {
  console.log(pets[i]);
}

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
newArr = pets.slice();
let sortArr = newArr.sort();
console.log(sortArr);

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
newArr1 = pets.slice();
let invertArr = newArr1.reverse();
console.log(invertArr);

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
newArr2 = pets.slice(); // onde evitare confusione, in questi es. ho evitato di modificare l'array principale, non so se vada bene
let moveEl = newArr2.shift();
newArr2.push(moveEl);
console.log(newArr2);

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: "Ford",
    model: "Fiesta",
    color: "red",
    trims: ["titanium", "st", "active"],
  },
  {
    brand: "Peugeot",
    model: "208",
    color: "blue",
    trims: ["allure", "GT"],
  },
  {
    brand: "Volkswagen",
    model: "Polo",
    color: "black",
    trims: ["life", "style", "r-line"],
  },
];

for (let i = 0; i < cars.length; i++) {
  if (cars[i].brand == "Ford") {
    cars[i].licensePlate = "yes";
  } else {
    cars[i].licensePlate = "no";
  }
}
console.log(cars);

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/

const newArrObj = {
  brand: "Fiat",
  model: "Panda",
  color: "white",
  trims: ["city", "style"],
  licensePlate: "no",
};

cars.push(newArrObj);
console.log(cars);

// part.2

for (let i = 0; i < cars.length; i++) {
  cars[i].trims.pop();
}
console.log(cars);

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = [];
for (let i = 0; i < cars.length; i++) {
  justTrims.push(cars[i].trims[0]);
}
console.log(justTrims);

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/

for (let i = 0; i < cars.length; i++) {
  if (cars[i].color.slice(0, 1) == "b") {
    console.log("Fizz");
  } else {
    console.log("Buzz");
  }
}

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105];
const limitVal = 32;
let i = 0;

while (i < numericArray.length) {
  let singleval = numericArray[i];
  if (singleval <= 32) {
    console.log(singleval);
  }
  i++;
}

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ["g", "n", "u", "z", "d"];
let newArr3 = [];

for (let i = 0; i < charactersArray.length; i++) {
  let singlelett = charactersArray[i];
  switch (charactersArray[i]) {
    case "a":
      newArr3.push(1);
      break;
    case "b":
      newArr3.push(2);
      break;
    case "c":
      newArr3.push(3);
      break;
    case "d":
      newArr3.push(4);
      break;
    case "e":
      newArr3.push(5);
      break;
    case "f":
      newArr3.push(6);
      break;
    case "g":
      newArr3.push(7);
      break;
    case "h":
      newArr3.push(8);
      break;
    case "i":
      newArr3.push(9);
      break;
    case "l":
      newArr3.push(10);
      break;
    case "m":
      newArr3.push(11);
      break;
    case "n":
      newArr3.push(12);
      break;
    case "o":
      newArr3.push(13);
      break;
    case "p":
      newArr3.push(14);
      break;
    case "q":
      newArr3.push(15);
      break;
    case "r":
      newArr3.push(16);
      break;
    case "s":
      newArr3.push(17);
      break;
    case "t":
      newArr3.push(18);
      break;
    case "u":
      newArr3.push(19);
      break;
    case "v":
      newArr3.push(20);
      break;
    case "z":
      newArr3.push(21);
      break;
  }
}

console.log(newArr3);
