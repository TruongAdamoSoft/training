class Person{
    private _name: string;
    private _age: number;
    private _address: string;

    constructor(name: string, age: number, address: string){
        this._name = name;
        this._age = age;
        this._address = address;
    }

    public get name(): string{
        return this._name;
    }

    public set name(newName: string){
        if(!this._name){
            throw new Error(`Invalid Name!`)
        }
        this._name = newName
    }

    public get age(): number{
        return this._age;
    }

    public set age(newAge: number){
        if(newAge < 0){
            throw new Error(`Invalid age!`)
        }
        this._age = newAge
    }

    public get address(): string{
        return this._address;
    }
}

class Student extends Person{
    private _studentId: number;
    constructor(studentId: number, name: string, age: number, address: string){
        super(name, age, address);
        this._studentId = studentId;
    }

    public studentInfo(): string{
        return `Student's Id: ${this._studentId}, Student's Name: ${this.name}, Student's Age: ${this.age}, Student's Address: ${this.address}`
    }
}

const newStudent = new Student(1, `top`, 29, `korea`)
console.log(newStudent.studentInfo())

