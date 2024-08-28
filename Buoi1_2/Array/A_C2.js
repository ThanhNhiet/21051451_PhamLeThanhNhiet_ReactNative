// Let's go back to Julia and Kate's study about dogs. This time, they want to convert
// dog ages to human ages and calculate the average age of the dogs in their study.
// Your tasks:
// Create a function 'calcAverageHumanAge', which accepts an arrays of dog's
// ages ('ages'), and does the following things in order:
// 1. Calculate the dog age in human years using the following formula: if the dog is
// <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old,
// humanAge = 16 + dogAge * 4
// 2. Exclude all dogs that are less than 18 human years old (which is the same as
// keeping dogs that are at least 18 years old)
// 3. Calculate the average human age of all adult dogs

function calcAverageHumanAge(ages) {
    // 1
    let humanAges = ages.map(age => age <= 2 ? 2 * age : 16 + age * 4);
    // console.log(`human ages: ${humanAges}`);
    // 2
    let adultDogs = humanAges.filter(age => age >= 18);
    // console.log(`adult dogs: ${adultDogs}`);
    // 3
    let average = adultDogs.reduce((acc, age, i, arr) => acc + age / arr.length, 0);
    console.log(`\naverage age: ${average}`);
}
// 4. Run the function for both test datasets
// Test data:
// § Data 1: [5, 2, 4, 1, 15, 8, 3]
let d1 = [5, 2, 4, 1, 15, 8, 3];
calcAverageHumanAge(d1);
// § Data 2: [16, 6, 10, 5, 6, 1, 4]
let d2 = [16, 6, 10, 5, 6, 1, 4];
calcAverageHumanAge(d2);