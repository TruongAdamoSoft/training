class User {
    firstName: string;
    lastName: string;
    age: number;

    constructor(firstName: string, lastName: string, age: number){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    getAverageAge(users: User[]){
        const totalAge = users.reduce((total, user) => total + user.age, 0)
        return totalAge / users.length;
    }

    
}