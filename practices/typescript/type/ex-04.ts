class Person {
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string) {
        this.name = name;
        this.age = age;
        this.address = address;
    }

    getInfo(): string {
        return `Name: ${this.name}, Age: ${this.age}, Address: ${this.address}`;
    }
}

class Student extends Person {
    studentId: string;

    constructor(name: string, age: number, address: string, studentId: string) {
        super(name, age, address);
        this.studentId = studentId;
    }

    showInfo(): string {
        return `${super.getInfo()}, Student ID: ${this.studentId}`;
    }
}