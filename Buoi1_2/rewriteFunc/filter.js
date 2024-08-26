Array.prototype.myfilter = function(callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            result.push(this[i]);
        }
    }
    return result;
}

const number = [45, 4, 9, 16, 25];
var value = number.myfilter((x) => x > 18);
console.log(value);