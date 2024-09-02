function filterByCategory(products) {
    return function(category) {
        return products.filter(product => product.category === category);
    };
}

const products = [
    { name: "Shirt", category: "Clothing" },
    { name: "Laptop", category: "Electronics" },
    { name: "Shoes", category: "Footwear" },
];

const filterClothing = filterByCategory(products);
console.log(filterClothing("Clothing")); // [{ name: "Shirt", category: "Clothing" }]
