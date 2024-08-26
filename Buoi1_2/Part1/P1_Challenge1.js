//Use data 1
// 1. Store Mark's and John's mass and height in variables
let markWeight = 78;
let markHeight = 1.69;
let johnWeight = 92;
let johnHeight = 1.95;

// 2. Calculate both their BMIs using the formula (you can even implement both versions)
function bmiCalculate(weight, height) {
    return weight / height ** 2;
}
console.log(`markBMI data 1: ${bmiCalculate(markWeight, markHeight)}`);
console.log(`johnBMI data 1: ${bmiCalculate(johnWeight, johnHeight)}`);

// 3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.
let markHigherBMI = bmiCalculate(markWeight, markHeight) > bmiCalculate(johnWeight, johnHeight);
console.log(markHigherBMI);

//Use data 2
let markWeight2 = 95;
let markHeight2 = 1.88;
let johnWeight2 = 85;
let johnHeight2 = 1.76;

console.log(`markBMI data 2: ${bmiCalculate(markWeight2, markHeight2)}`);
console.log(`johnBMI data 2: ${bmiCalculate(johnWeight2, johnHeight2)}`);

let markHigherBMI2 = bmiCalculate(markWeight2, markHeight2) > bmiCalculate(johnWeight2, johnHeight2);
console.log(markHigherBMI2);