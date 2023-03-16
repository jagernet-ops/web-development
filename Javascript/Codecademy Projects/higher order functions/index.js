// const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
//     for(let i = 1; i <= 1000000; i++) {
//       if ( (2 + 2) != 4) {
//         console.log('Something has gone very wrong :( ');
//       }
//     }
//   };
  
//   // Write your code below
  
// const isTwoPlusTwo = checkThatTwoPlusTwoEqualsFourAMillionTimes;
// isTwoPlusTwo();

// const addTwo = num => {
//   return num + 2;
// }

// const checkConsistentOutput = (func, val) => {

// }

// console.log();

// const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// // Iterate over fruits below
// fruits.forEach(fruit => console.log('I want to eat a '+ fruit));

// const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// // Create the secretMessage array below

// const secretMessage = animals.map(animal => animal[0]);

// console.log(secretMessage.join(''));

// const bigNumbers = [100, 200, 300, 400, 500];

// // Create the smallNumbers array below

// const smallNumbers = bigNumbers.map(number => number/100);

// console.log(smallNumbers.join(''));

// const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below

// const smallNumbers =  randomNumbers.filter(number => number < 250);
// console.log(smallNumbers);

// const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];


// // Call .filter() on favoriteWords below

// const longFavoriteWords = favoriteWords.filter(words => words.length > 7);
// console.log(longFavoriteWords);

// const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

// const foundAnimal = animals.findIndex(animal => animal.charAt(0) === 's');

// console.log(foundAnimal);

// const newNumbers = [1, 3, 5, 7];

// const newSum = newNumbers.reduce((accumulator, currentValue) => {
//   console.log(`The value of the accumulator is: ${accumulator}`);
//   console.log(`The value of the current value is: ${currentValue}`);
//   return accumulator + currentValue;
// }, 10);

// console.log(newSum);

// const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

// // Something is missing in the method call below

// console.log(words.some((word) => {
//   return word.length < 6;
// }));

// // Use filter to create a new array
// const interestingWords = words.filter(word => word.length > 5);


// // Make sure to uncomment the code below and fix the incorrect code before running it

// console.log(interestingWords.every((word) => { 
//   return word.length > 5;
// } ));

// const cities = ['Orlando', 'Dubai', 'Edinburgh', 'Chennai', 'Accra', 'Denver', 'Eskisehir', 'Medellin', 'Yokohama'];

// const nums = [1, 50, 75, 200, 350, 525, 1000];

// //  Choose a method that will return undefined
// cities.forEach(city => console.log('Have you visited ' + city + '?'));

// // Choose a method that will return a new array
// const longCities = cities.filter(city => city.length > 7);

// // Choose a method that will return a single value
// const word = cities.reduce((acc, currVal) => {
//   return acc + currVal[0]
// }, "C");

// console.log(word)

// // Choose a method that will return a new array
// const smallerNums = nums.map(num => num - 5);

// // Choose a method that will return a boolean value
// nums.every(num => num < 0);
