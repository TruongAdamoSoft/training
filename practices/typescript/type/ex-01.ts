class User {
    firstName: string;
    lastName: string;
    age: number;

    constructor(firstName: string, lastName: string, age: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
}

class UserCollection {
    users: User[];
  
    constructor(users: User[]) {
      this.users = users;
    }
  
    getAverageAge(): number {
      if (this.users.length === 0) {
        return 0;
      }
  
      const totalAge = this.users.reduce((sum, user) => sum + user.age, 0);
      return totalAge / this.users.length;
    }
  }
  
const users: User[] = [
new User("Nguyen", "A", 25),
new User("Nguyen", "B", 30),
new User("Nguyen", "C", 35)
];

const userCollection = new UserCollection(users);
const averageAge = userCollection.getAverageAge();

console.log("Average Age:", averageAge);