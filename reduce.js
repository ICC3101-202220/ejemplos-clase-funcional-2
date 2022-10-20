const numbers = [1,2,3,4,5,6,7,8,9,10];

// let sum = 0;
// for (const number of numbers) {
//   sum += number;
// }

const sum = numbers.reduce((currentSum, number) => currentSum + number);
console.log(sum);

// Lista de numeros
// Nos quedamos solo con los pares
// La reducimos a la multiplicación

// Despues, nos quedamos solo con los impares de la lista original
// Calculamos la suma

// Luego sumamos los dos valores anteriores

const isEven = (number) => number % 2 === 0;
const isOdd = (number) => number % 2 !== 0;

const reduceMultiply = (acc, number) => acc * number;
const reduceSum = (acc, number) => acc + number;

// const multOnlyEven = (array) => array.filter(isEven).reduce(reduceMultiply);
// const sumOnlyOdd = (array) => array.filter(isOdd).reduce(reduceSum);
const reduceFiltered = (array, fnReduce, fnFilter) => array.filter(fnFilter).reduce(fnReduce);
const multOnlyEven = (array) => reduceFiltered(array, reduceMultiply, isEven);


// const evenMult = multOnlyEven(numbers);
// const oddSum = sumOnlyOdd(numbers);

const evenMult = multOnlyEven(numbers);
const oddSum = reduceFiltered(numbers, reduceSum, isOdd);

console.log(evenMult + oddSum);


const multiply = (a, b) => Math.abs(a) * Math.abs(b);
const duplicate = (a) => multiply(a, 2);

// Lista de letras
// La transforman en una lista de números
// Calculan la suma de esos números


const letters = ['H', 'O', 'L', 'A'];
const offset = letters
  .map((letter) => letter.charCodeAt(0))
  .reduce((acc, number) => acc + number);
console.log(offset);

// Lista de letras
// La transforman en una lista de números
// Mover cada elemento en 5 posiciones
// Convertir nuevos valores a su caracter unicode
// Retornar string resultante

const encripted = letters
  .map((letter) => letter.charCodeAt(0))
  .map((number) => number + 5)
  .map((number) => String.fromCharCode(number))
  .reduce((word, letter) => word + letter, '');

console.log(encripted);

