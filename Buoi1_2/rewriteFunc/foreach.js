//rewrite foreach function to myForeach

Array.prototype.myForeach = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
}

const number = [45, 4, 9, 16, 25];
number.myForeach((x) => {
    console.log(x);
});