function numberChecker(arr) {
    return function(num) {
        return arr.includes(num);
    };
}

const checkNumber = numberChecker([1, 2, 3, 4, 5]);
console.log(checkNumber(3)); // true
console.log(checkNumber(6)); // false
