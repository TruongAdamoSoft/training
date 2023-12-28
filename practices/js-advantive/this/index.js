class Person {
    constructor(firstName, lastName, age, address) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.address = address;
    }

    showName() {
        return this.firstName + " " + this.lastName;
    }
}

const p1 = new Person("David", "A", "24", "Hanoi");
console.log(p1.showName());