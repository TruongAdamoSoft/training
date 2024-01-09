class Employee{
    private _firstName: string;
    private _lastName: string;
    private _age: number;
    private _position: string;
    private _salary: number;

    constructor(firstName: string, lastName: string, age: number, position: string, salary: number){
        this._firstName = firstName;
        this._lastName = lastName;
        this._age = age;
        this._position = position;
        this._salary = salary;
    }

    public get name(){
        return this._firstName;
    }
    
    public set name(newFirstName: string){
        this._firstName = newFirstName;
    }
    public get age(){
        return this._age;
    }

    public set updatedAge(newAge: number){
        if(newAge < 0 || newAge >= 150){
            throw new Error("this age is invalid")
        }
        this._age = newAge;
    }

    public get position(){
        return this._position
    }

    public set position(newPosition: string){
        this._position = newPosition;
    }

    public get salary(){
        return this._salary;
    }

    public set salary(newSalary: number){
        this._salary = newSalary;
    }

    increasedSalary(percentage: number){
        if(this._salary <= 0 ){
            throw new Error("can't be increased")
        }
        return this._salary * percentage;
    }

    showInfo(): string{
        return `${this._firstName}` + `${this._lastName}`;
    }

}