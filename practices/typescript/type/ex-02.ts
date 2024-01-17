enum Gender {
    Male = "male",
    Female = "female",
    Other = "other"
}

interface Person {
    name: string,
    age: number,
    gender: Gender
}

function updatePerson(person: Person, propertyName: string, newValue: any): Person {
    const modifiedPerson = {
        [propertyName]: newValue
    }
    return {
      ...person,
      ...modifiedPerson
    };
}
  
const person: Person = {
    name: "John",
    age: 25,
    gender: Gender.Male
};

const updatedPerson = updatePerson(person, "age", 26);

console.log(updatedPerson);