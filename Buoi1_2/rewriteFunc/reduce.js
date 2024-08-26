//rewrite reduce to myReduce
Array.prototype.myReduce = function(callback, initialValue) {
    let result = initialValue;
    for (let i = 0; i < this.length; i++) {
        result = callback(result, this[i]);
    }
    return result;
}

const number = [45, 4, 1];
// 45 - 4 - 1 = 40
function myFunc(total, num) {
    return total - num;
}
var value = number.myReduce(myFunc, 0);
console.log(value);

var value2 = number.reduce(myFunc);
console.log(value2);