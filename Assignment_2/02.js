function uniqueItems(arr) {
    return Array.from(new Set(arr));
}

let numbers = [1, 2, 3, 4, 4, 5, 6, 6, 7];
console.log(uniqueItems(numbers)); // [1, 2, 3, 4, 5, 6, 7]
