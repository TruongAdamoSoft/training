/*
Bài tập: Viết một class Employee với các thông tin firstName, lastName, age, position, salary
Với các method showInfo(), increaseSalary(percentage: number) (sử dụng try catch ở đây để handle error)
*/
// TODO: Implement code here

class Employee {
    constructor(firstName, lastName, age, position, salary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.position = position;
        this.salary = salary;
    }

    showInfo() {
        console.log(this.firstName, this.lastName, this.age, this.position, this.salary);
    }

    increaseSalary(percentage) {
        try {
            if (percentage <= 0) throw "Percentage is invalid";

            return this.salary + (this.salary * percentage / 100); 
        } catch (error) {
            console.log(error);
        }
    }
}

const employee1 = new Employee("Nguyen", "A", 20, "Dev", 50);
// 55
console.log(employee1.increaseSalary(10));