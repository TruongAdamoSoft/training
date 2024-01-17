"use strict";
class ObjectManager {
    constructor() {
        this.items = [];
    }
    addItem(item) {
        this.items.push(item);
    }
    removeItem(item) {
        this.items = this.items.filter(it => it.id != item.id);
    }
    getAllItems() {
        return this.items;
    }
    getItemById(id) {
        return this.items.find(item => item.id === id);
    }
    clear() {
        this.items = [];
    }
}
const personManager = new ObjectManager();
personManager.addItem({ id: 1, name: "John", age: 25 });
personManager.addItem({ id: 2, name: "Alice", age: 30 });
const allPersons = personManager.getAllItems();
console.log("All Persons:", allPersons);
const foundPerson = personManager.getItemById(1);
console.log("Found Person:", foundPerson);
const personToRemove = { id: 2, name: "Alice", age: 30 };
personManager.removeItem(personToRemove);
const updatedPersons = personManager.getAllItems();
console.log("Updated Persons:", updatedPersons);
personManager.clear();
const emptyList = personManager.getAllItems();
console.log("Empty List:", emptyList);
