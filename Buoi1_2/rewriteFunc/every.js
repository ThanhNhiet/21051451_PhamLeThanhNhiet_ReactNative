//rewrite function every to myEvery
Array.prototype.myEvery = function(callback) {
    for (let i = 0; i < this.length; i++) {
        if (!callback(this[i])) {
            return false;
        }
    }
    return true;
}

const number = [45, 4, 9, 16, 25];
var value = number.myEvery((num) => num > 18);