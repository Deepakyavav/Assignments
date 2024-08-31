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
