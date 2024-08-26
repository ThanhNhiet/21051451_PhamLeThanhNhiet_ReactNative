//rewrite find function to myFind
Array.prototype.myFind = function(callback) {
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i])) {
            return this[i];
        }
    }
    return undefined;
}

const number = [45, 4, 9, 16, 25];
var value = number.myFind((x) => x > 18);
console.log(value);