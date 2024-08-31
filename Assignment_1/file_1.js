// 1. Reverse String with Delay
let input = "Hello, World!";

setTimeout(() => {
    let reversedString = input.split("").reverse().join("");
    console.log("Reversed String:", reversedString);
}, 2000);

// 2. Random Number Generator with Delay and Progress Indication
let delayInSeconds = 3;

let interval = setInterval(() => {
    console.log(`Time remaining: ${delayInSeconds} seconds`);
    delayInSeconds--;
    if (delayInSeconds < 0) {
        clearInterval(interval);
        let randomNumber = Math.floor(Math.random() * 100) + 1;
        console.log("Generated Random Number:", randomNumber);
    }
}, 1000);

// 3. Store's Inventory Conversion to INR
let storeItems = {
    "Apple": 1.2,
    "Banana": 0.5,
    "Orange": 0.8,
    "Milk": 3.5
};

let exchangeRate = 80;

let convertedItems = Object.fromEntries(
    Object.entries(storeItems).map(([item, price]) => [item, price * exchangeRate])
);

console.log("Converted Prices in INR:", convertedItems);

// 4. Filtering and Capitalizing: Books Published After 2010 with Author Names
let books = [
    { title: "Book One", author: "john doe", year: 2008 },
    { title: "Book Two", author: "jane smith", year: 2012 },
    { title: "Book Three", author: "william brown", year: 2015 }
];

let filteredBooks = books
    .filter(book => book.year > 2010)
    .map(book => ({ ...book, author: book.author.toUpperCase() }));

console.log("Books Published After 2010 with Capitalized Author Names:", filteredBooks);

// 5. URL Validation
function validateURL(url) {
    const regex = /^(http:\/\/|https:\/\/)[a-zA-Z0-9\-._~:\/?#\[\]@!$&'()*+,;=%]+(\.[a-zA-Z]+)+$/;
    console.log(validateURL(url) ? "Valid URL" : "Invalid URL");
}

validateURL("https://github.com/Deepakyavav/Assignments");  // Valid URL
validateURL("ftp://example.com");         // Invalid URL

// 6. LinkedIn Profile URL Validator
function validateLinkedInProfileURL(url) {
    const regex = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}$/;
    console.log(validateLinkedInProfileURL(url) ? "Valid LinkedIn Profile URL" : "Invalid LinkedIn Profile URL");
}

validateLinkedInProfileURL("https://www.linkedin.com/in/johndoe123");  // Valid
validateLinkedInProfileURL("https://www.linkedin.com/in/john");        // Invalid
validateLinkedInProfileURL("https://www.linkedin.com/in/john_doe-");   // Valid
validateLinkedInProfileURL("https://linkedin.com/in/johndoe123");      // Invalid
