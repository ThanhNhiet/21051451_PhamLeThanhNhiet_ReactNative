// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
// gymnastics discipline, which works differently.
// Each team competes 3 times, and then the average of the 3 scores is calculated (so
// one average score per team).
// A team only wins if it has at least double the average score of the other team.
// Otherwise, no team wins!
// Your tasks:
// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
let calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// 2. Use the function to calculate the average for both teams
console.log("Data 1:");
let avgDolphins = calcAverage(44, 23, 71); //data 1
let avgKoalas = calcAverage(65, 54, 49); //data 1
console.log(`Dolphin avr: ${avgDolphins}, Koalas avr: ${avgKoalas}`);

// 3. Create a function 'checkWinner' that takes the average score of each team
// as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
// to the console, together with the victory points, according to the rule above.
// Example: "Koalas win (30 vs. 13)"

let checkWinner = (avgDolphins, avgKoalas) => {
    if (avgDolphins > avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas > avgDolphins) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log("draw");
    }
}

checkWinner(avgDolphins, avgKoalas);
// 4. Use the 'checkWinner' function to determine the winner for both Data 1 and
// Data 2
console.log("\nData 2:");
let avgDolphins_d2 = calcAverage(85, 54, 41); //data 2
let avgKoalas_d2 = calcAverage(23, 34, 27); //data 2

console.log(`Dolphin avr: ${avgDolphins_d2}, Koalas avr: ${avgKoalas_d2}`);
checkWinner(avgDolphins_d2, avgKoalas_d2);

// 5. Ignore draws this time
console.log("\nIgnore draws:");
let checkWinnerIgnoreDraw = (avgDolphins, avgKoalas) => {
    if (avgDolphins > avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas > avgDolphins) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    }
}
checkWinnerIgnoreDraw(avgDolphins, avgKoalas);
checkWinnerIgnoreDraw(avgDolphins_d2, avgKoalas_d2);

// Test data:
// § Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
// § Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
// Hints:
// § To calculate average of 3 values, add them all together and divide by 3
// § To check if number A is at least double number B, check for A >= 2 * B.
// Apply this to the team's average scores