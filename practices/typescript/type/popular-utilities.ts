//partial
interface Person2{
    name: string,
    age: number,
    gender?: string

}

let updatePerson: Partial<Person> ={};
updatePerson.name = 'haha';

let employee: Required<Person2> = {
    name: 'zoro',
    age: 20,
    gender: 'male'
}