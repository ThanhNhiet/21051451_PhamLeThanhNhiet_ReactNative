//rewrite function some to mySome
Array.prototype.mySome = function(callback) {
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i])) {
            return true;
        }
    }
    return false;
}

const number = [45, 4, 9, 16, 25];
var value = number.mySome((x) => x > 18);
console.log(value);