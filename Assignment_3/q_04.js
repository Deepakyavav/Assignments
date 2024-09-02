class Employee {
    constructor(name, position, salary) {
        this.name = name;
        this.position = position;
        this.salary = salary;
    }

    getSalary() {
        return this.salary;
    }
}

const employee = new Employee("Jane", "Developer", 80000);
console.log(employee.getSalary()); // 80000
