//rewrite map function to myMap
Array.prototype.myMap = function(callback) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        result.push(callback(this[i]));
    }
    return result;
}

const number = [45, 4, 9, 16, 25];
var value = number.myMap(Math.sqrt);
console.log(number);
console.log(value);