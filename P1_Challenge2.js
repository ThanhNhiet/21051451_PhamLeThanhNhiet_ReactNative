// CL1 code
//Use data 1
// 1. Print a nice output to the console, saying who has the higher BMI. The message
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
let markWeight = 78;
let markHeight = 1.69;
let johnWeight = 92;
let johnHeight = 1.95;

function bmiCalculate(weight, height) {
    return Math.round((weight / (height ** 2)) * 10) / 10;
}
console.log(`markBMI data 1: ${bmiCalculate(markWeight, markHeight)}`);
console.log(`johnBMI data 1: ${bmiCalculate(johnWeight, johnHeight)}`);

// 1. Print a nice output to the console, saying who has the higher BMI. The message
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
if (bmiCalculate(markWeight, markHeight) > bmiCalculate(johnWeight, johnHeight)) {
    console.log("Mark's BMI is higher than John's!");
} else {
    console.log("John's BMI is higher than Mark's!");
}

// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
// BMI (28.3) is higher than John's (23.9)!"
if (bmiCalculate(markWeight, markHeight) > bmiCalculate(johnWeight, johnHeight)) {
    console.log(`Mark's BMI (${bmiCalculate(markWeight, markHeight)}) is higher than John's (${bmiCalculate(johnWeight, johnHeight)})!`);
} else {
    console.log(`John's BMI (${bmiCalculate(johnWeight, johnHeight)}) is higher than Mark's (${bmiCalculate(markWeight, markHeight)})!`);
}