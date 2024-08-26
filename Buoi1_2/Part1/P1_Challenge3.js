// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

// Calculate the average score for each team
// 1. Calculate the average score for each team, using the test data 1
let dolphinsScore = (96 + 108 + 89) / 3;
let koalasScore = (88 + 91 + 110) / 3;

console.log(`Dolphins average score: ${dolphinsScore}`);
console.log(`Koalas average score: ${koalasScore}`);

// 2. Compare the team's average scores to determine the winner of the competition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)
if (dolphinsScore > koalasScore) {
    console.log("Dolphins win");
} else if (dolphinsScore < koalasScore) {
    console.log("Koalas win");
} else {
    console.log("draw");
}

// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
// team only wins if it has a higher score than the other team, and the same time a
// score of at least 100 points. Hint: Use a logical operator to test for minimum
// score, as well as multiple else-if blocks �
console.log("\nBonus 1:");
let dolphinsScore_B1 = (97 + 112 + 101) / 3;
let koalasScore_B1 = (109 + 95 + 123) / 3;
console.log(`Dolphins average score: ${dolphinsScore_B1}`);
console.log(`Koalas average score: ${koalasScore_B1}`);

if (dolphinsScore_B1 > koalasScore_B1 && dolphinsScore_B1 >= 100) {
    console.log("Dolphins win");
} else if (dolphinsScore_B1 < koalasScore_B1 && koalasScore_B1 >= 100) {
    console.log("Koalas win");
} else {
    console.log("draw");
}
// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
// both teams have the same score and both have a score greater or equal 100
// points. Otherwise, no team wins the trophy
console.log("\nBonus 2:");
let dolphinsScore_B2 = (97 + 112 + 101) / 3;
let koalasScore_B2 = (109 + 95 + 106) / 3;

console.log(`Dolphins average score: ${dolphinsScore_B2}`);
console.log(`Koalas average score: ${koalasScore_B2}`);

if (dolphinsScore_B2 > koalasScore_B2 && dolphinsScore_B2 >= 100) {
    console.log("Dolphins win");
} else if (dolphinsScore_B2 < koalasScore_B2 && koalasScore_B2 >= 100) {
    console.log("Koalas win");
} else if (dolphinsScore_B2 === koalasScore_B2 && dolphinsScore_B2 >= 100 && koalasScore_B2 >= 100) {
    console.log("draw");
} else {
    console.log("bruhh");
}