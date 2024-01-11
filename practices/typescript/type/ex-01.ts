class User {
    _firstName: string;
    _lastName: string;
    _age: number;

    constructor(firstName: string, lastName: string, age: number){
        this._firstName = firstName;
        this._lastName = lastName;
        this._age = age;
    }
}

const users: User[] = [
    {_firstName: `banh`, _lastName: `lee`, _age: 93},
    {_firstName: `coc`, _lastName: `sua`, _age: 29},
    {_firstName: `la`, _lastName: `vie`, _age: 12}
]


export function getAverageAge(users: User[]): number {
    const totalAge = users.reduce((total, users) => total + users._age, 0);
    return totalAge / users.length
}
const avrAgeResult = getAverageAge(users)
console.log(avrAgeResult)