class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    calculateAnnualSalary() {
        return this.salary * 12;
    }
}

class Manager extends Employee {
    constructor(name, salary, department, bonus) {
        super(name, salary); 
        this.department = department;
        this.bonus = bonus; 
    }

    calculateAnnualSalary() {
        return super.calculateAnnualSalary() + this.bonus;
    }
}

const manager1 = new Manager("Alice", 5000, "1", 10000);
const manager2 = new Manager("Bob", 6000, "2", 12000);

console.log(`${manager1.name} из отдела ${manager1.department} имеет годовую зарплату ${manager1.calculateAnnualSalary()} рублей.`);
console.log(`${manager2.name} из отдела ${manager2.department} имеет годовую зарплату ${manager2.calculateAnnualSalary()} рублей.`);
