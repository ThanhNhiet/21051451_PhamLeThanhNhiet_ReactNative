// Steven wants to build a very simple tip calculator for whenever he goes eating in a
// restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
// 300. If the value is different, the tip is 20%.

// Your tasks:
// 1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
// this. It's not allowed to use an if/else statement � (If it's easier for you, you can
// start with an if/else statement, and then try to convert it to a ternary
// operator!)
let bill = [275, 40, 430];
let tip = bill.map(bill =>
    bill >= 50 && bill <= 300 ?
    bill * 0.15 // 15% neu trong khoan 50-300
    :
    bill * 0.2); //20% neu vuot muc 50-300
console.log(`Tien tip ung voi ${bill} lan luot la ${tip}`);

// 2. Print a string to the console containing the bill value, the tip, and the final value
// (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
// 316.25”
let total = bill.map((bill, index) => bill + tip[index]);
for (let i = 0; i < bill.length; i++) {
    // total = bill[i] + tip[i];
    console.log(`Voi bill ${bill[i]}, tip la ${tip[i]}, tong cong la ${total[i]}`);
}

// Test data:
// § Data 1: Test for bill values 275, 40 and 430
// Hints:
// § To calculate 20% of a value, simply multiply it by 20/100 = 0.2
// § Value X is between 50 and 300, if it's >= 50 && <= 300 �