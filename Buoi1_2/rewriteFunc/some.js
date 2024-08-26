//rewrite function some to mySome
Array.prototype.mySome = function(num) {
    for (let i = 0; i < num.length; i++) {
        if (callback(num[i])) {
            return true;
        }
    }
    return false;
}

const number = [45, 4, 9, 16, 25];
var value = number.mySome(18);
console.log(value);