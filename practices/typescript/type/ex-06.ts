interface Person {
    id: number;
    name: string;
    age: number;
}
  
  
class ObjectManager<T extends { id: number }> {
    private items: T[] = [];

    addItem(item: T) {
        this.items.push(item);
    }

    removeItem(item: T) {
        this.items = this.items.filter(it=>it.id != item.id);
    }

    getAllItems(): T[] {
        return this.items;
    }

    getItemById(id: number): T | undefined  {
        return this.items.find(item => item.id === id);
    }

    clear(): void {
        this.items = [];
    }
}

const personManager = new ObjectManager<Person>();

personManager.addItem({ id: 1, name: "John", age: 25 });
personManager.addItem({ id: 2, name: "Alice", age: 30 });

// Lấy toàn bộ danh sách
const allPersons = personManager.getAllItems();
console.log("All Persons:", allPersons);

// Tìm Person theo id
const foundPerson = personManager.getItemById(1);
console.log("Found Person:", foundPerson);

// Xóa một Person khỏi danh sách
const personToRemove = { id: 2, name: "Alice", age: 30 };
personManager.removeItem(personToRemove);

// Lấy lại danh sách sau khi xóa
const updatedPersons = personManager.getAllItems();
console.log("Updated Persons:", updatedPersons);

// Xóa toàn bộ danh sách
personManager.clear();
const emptyList = personManager.getAllItems();
console.log("Empty List:", emptyList);
  