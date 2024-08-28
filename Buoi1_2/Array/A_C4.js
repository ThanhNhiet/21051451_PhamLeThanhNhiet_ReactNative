// Julia and Kate are still studying dogs, and this time they are studying if dogs are
// eating too much or too little.
// Eating too much means the dog's current food portion is larger than the
// recommended portion, and eating too little is the opposite.
// Eating an okay amount means the dog's current food portion is within a range 10%
// above and 10% below the recommended portion.
// Hints:
// § Use many different tools to solve these challenges, you can use the summary
// lecture to choose between them 😉
// § Being within a range 10% above and below the recommended portion means:
// current > (recommended * 0.90) && current < (recommended *
// 1.10). Basically, the current portion should be between 90% and 110% of the
// recommended portion.

const dogs = [
    { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
    { weight: 8, curFood: 200, owners: ['Matilda'] },
    { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
    { weight: 32, curFood: 340, owners: ['Michael'] },
];

// 1. Loop over the 'dogs' array containing dog objects, and for each dog, calculate
// the recommended food portion and add it to the object as a new property. Do
// not create a new array, simply loop over the array. Forumla:
// recommendedFood = weight ** 0.75 * 28. (The result is in grams of
// food, and the weight needs to be in kg)
dogs.forEach(dog => dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28));
console.log(dogs);

// 2. Find Sarah's dog and log to the console whether it's eating too much or too
// little. Hint: Some dogs have multiple owners, so you first need to find Sarah in
// the owners array, and so this one is a bit tricky (on purpose)
const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(`\nSarah's dog: `, dogSarah);
console.log(`Sarah's dog is eating too ${dogSarah.curFood > dogSarah.recommendedFood
    ? 'much' : 'little'}`);

// 3. Create an array containing all owners of dogs who eat too much
// ('ownersEatTooMuch') and an array with all owners of dogs who eat too little
// ('ownersEatTooLittle').
const owners_DogEatTooMuch = dogs.filter(dog => dog.curFood > dog.recommendedFood)
    .flatMap(dog => dog.owners);
console.log(`\nOwners who eat too much: `, owners_DogEatTooMuch);

const owners_DogEatTooLittle = dogs.filter(dog => dog.curFood < dog.recommendedFood)
    .flatMap(dog => dog.owners);
console.log(`Owners who eat too little: `, owners_DogEatTooLittle);

// 4. Log a string to the console for each array created in 3., like this: "Matilda and
// Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat
// too little!"
console.log(`\n${owners_DogEatTooMuch.join(' and ')}'s dogs eat too much!`);
console.log(`${owners_DogEatTooLittle.join(' and ')}'s dogs eat too little!`);

// 5. Log to the console whether there is any dog eating exactly the amount of food
// that is recommended (just true or false).
const eatExactly = dogs.some(dog => dog.curFood === dog.recommendedFood);
console.log(`\nAny dog eating exactly the amount of food that is recommended: ${eatExactly}`);

// 6. Log to the console whether there is any dog eating an okay amount of food
// (just true or false)
const eatOkay = dogs.some(dog => 
    (dog.curFood > dog.recommendedFood * 0.90) && (dog.curFood < dog.recommendedFood * 1.10) );
console.log(`Any dog eating an okay amount of food: ${eatOkay}`);

// 7. Create an array containing the dogs that are eating an okay amount of food (try
// to reuse the condition used in 6.)
const dogsEatOkay = dogs.filter(dog => 
    (dog.curFood > dog.recommendedFood * 0.90) && (dog.curFood < dog.recommendedFood * 1.10) );
console.log(`\nDogs eating an okay amount of food: `, dogsEatOkay);

// 8. Create a shallow copy of the 'dogs' array and sort it by recommended food
// portion in an ascending order (keep in mind that the portions are inside the
// array's objects 😉)
const dogsSorted = dogs.slice().sort((a, b) => a.recommendedFood - b.recommendedFood);
console.log(`\nSorted by recommended food portion ASC: `, dogsSorted);

// console.log(`\n`, dogs);