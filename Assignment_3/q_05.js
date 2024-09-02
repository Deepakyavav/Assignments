class Person {
    constructor(name = "Unknown", age = 0) {
        this.name = name;
        this.age = age;
    }

    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}

const person = new Person();
console.log(person.getDetails()); // "Name: Unknown, Age: 0"
