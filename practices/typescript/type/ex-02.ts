enum Gender {MALE='male', FEMALE='female', OTHER='other'};

type Person = {
    name: string,
    age: number,
    gender: Gender
}

const human1: Person = {
    name: 'logi',
    age: 20,
    gender: Gender.MALE
}

function updateInfo(human: Person, updateFields: keyof Person, newValue: number | string | Gender){
    // human[updateFields] = newValue;

    return {...human, [updateFields]: newValue};
}
const human2 = updateInfo(human1, 'age', 30);
console.log(human2)
