// 1. Count the Occurrences
function countOccurrences(text) {
    const words = text.split(" ");
    const wordCount = new Map();

    words.forEach(word => {
        word = word.toLowerCase(); // Optional: Convert to lowercase for case-insensitive count
        wordCount.set(word, (wordCount.get(word) || 0) + 1);
    });

    return wordCount;
}

let text = "This is a test. This test is only a test.";
console.log(countOccurrences(text));

// 2. Only Unique Items Are Allowed
function uniqueItems(arr) {
    return Array.from(new Set(arr));
}

let numbers = [1, 2, 3, 4, 4, 5, 6, 6, 7];
console.log(uniqueItems(numbers)); // [1, 2, 3, 4, 5, 6, 7]

// 3. Swap the Values
function swapValues(x, y) {
    [x, y] = [y, x];
    return [x, y];
}

let x = 5, y = 10;
console.log(swapValues(x, y)); // [10, 5]

// 4. Access Random Elements
function extractElements(arr) {
    const [first, second, ...rest] = arr;
    const last = rest.pop();
    return [first, second, last];
}

let array = [1, 2, 3, 4, 5];
console.log(extractElements(array)); // [1, 2, 5]

// 5. Min and Max Values
function findMinMax(arr) {
    return {
        max: Math.max(...arr),
        min: Math.min(...arr)
    };
}

let values = [5, 2, 7, 1, 9];
console.log(findMinMax(values)); // { max: 9, min: 1 }

// 6. Nested Objects
function extractPersonDetails(person) {
    const { name, address: { street } } = person;
    return { name, street };
}

let person = {
    name: "John Doe",
    age: 30,
    address: {
        street: "123 Main St",
        city: "Anytown",
        country: "USA"
    }
};

console.log(extractPersonDetails(person)); // { name: 'John Doe', street: '123 Main St' }
