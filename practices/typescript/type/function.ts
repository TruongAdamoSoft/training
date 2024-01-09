
//function
const add = (a: number, b: number): number => a + b;

//Optional param
function welcome(firstName: string, lastName: string, middleName?: string): string {
    if(middleName) return firstName + " " + lastName + " " + middleName;
    else return firstName + " " + lastName;
}

//Default param
const hello = (firstName: string, lastName: string = 'Lee'): string => firstName + " " + lastName;

