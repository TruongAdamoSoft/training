class Employee {
    readonly firstName: string;
    readonly lastName: string;
    age: number;
    position: string;
    salary: number;

    constructor(firstName: string, lastName: string, age: number, position: string, salary: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.position = position;
        this.salary = salary;
    }

    getFirstName(): string {
        return this.firstName;
    }

    getLastName(): string {
        return this.lastName;
    }

    getAge(): number {
        return this.age;
    }

    getPosition(): string {
        return this.position;
    }

    getSalary(): number {
        return this.salary;
    }

    setAge(age: number) {
        this.age = age;
    }

    setPosition(position: string) {
        this.position = position;
    }

    setSalary(salary: number) {
        this.salary = salary;
    }

    showInfo() {
        return this.firstName + this.lastName;
    }

    updateAge(age: number) {
        this.age = age;
    }

    increaseSalary(percentage: number) {
        try {
            if (percentage < 0) {
                throw new Error("Percentage must be a positive number.");
            }
            const increaseAmount = (percentage / 100) * this.salary;
            this.salary += increaseAmount;
        } catch (error) {
            console.error(error);
        }
    }
}