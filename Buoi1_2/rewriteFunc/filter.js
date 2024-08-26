const number = [45, 4, 9, 16, 25];

Array.prototype.myfilter = function(num) {
    let newarr = [];
    console.log(this);
    for (let i = 0; i < this.length; i++) {
        if (this[i] > num)
            newarr.push(this[i]);
    }
    return newarr;
}

var value = number.myfilter(10);
console.log(value);