export enum EGender {MALE='male', FEMALE='female', OTHER='other'};

export type TPerson = {
    name: string,
    age: number,
    gender: EGender
}

const human: TPerson = {
    name: 'logi',
    age: 20,
    gender: EGender.MALE
}

export function updateInfo(human: TPerson, updateFields: keyof TPerson, newValue: number | string | EGender): TPerson{
    // human[updateFields] = newValue;

    return {...human, [updateFields]: newValue};
}
const otherGuy = updateInfo(human, 'age', 30);
console.log(otherGuy)

