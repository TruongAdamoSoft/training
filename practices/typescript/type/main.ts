import { updateInfo,TPerson, EGender } from "./ex-02";
import { getAverageAge } from "./ex-01";

const human: TPerson = {
    name: 'logi',
    age: 20,
    gender: EGender.MALE
}

const otherGuy = updateInfo(human, 'age', 30);


