const num: number = 2;
const string: string = 'hihi';
const boolean: boolean = true;

let year = 2024;

//Obj type
const Student: {name: string, age: number, gender: string} = {
    name: 'Thai',
    age: 21,
    gender: 'male'
}

//Optional type
const hocSinh: {name: string, age: number, gender?: string} = {
    name: 'Alex',
    age: 22
}

//Readonly type
const Pupil: {readonly name: string, age: number} = {
    name: 'Alaba',
    age: 24
}

//Type aliases
type Age = number;
const studentAge: Age = 22;
type Student1 = {name: string, age: number, class: string};
const student: Student1 = {
    name: 'luffy',
    age: 21,
    class: '12A4'
}

//Type assertions
interface Player {
    name: string,
    age: number,
    gender?: string
}
const koreaPlayer = {
    name: 'faker',
    age: 28
} as Player


console.log();