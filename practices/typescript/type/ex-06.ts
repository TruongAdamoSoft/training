
class ObjectManager<T extends {_id: string}>{

    private _crew: T[] = [];

    public addItem(item: T){
         this._crew.push(item)
    }

    public remove(item: T | undefined){
        this._crew.pop()
    }


    public getAllItem(){
        return this._crew
    }

    public clear(){
        return this._crew = []
    }
}

interface Person{
    _id: string;
    _name: string;
    _age: number;
}

const jungle = {
    _id: `2`,
    _name: `garen`,
    _age: 22
}
const mid = {
    _id: `4`,
    _name: `lulu`,
    _age: 22
}
const support = {
    _id: `1`,
    _name: `ashe`,
    _age: 22
}
const newObj = new ObjectManager<Person>()

newObj.addItem(jungle)
newObj.addItem(mid)
newObj.addItem(support)

// newObj.remove(mid)


console.log(newObj)
console.log(newObj.getAllItem())
// console.log(newObj.getItemById(4))

newObj.clear()
console.log(newObj)