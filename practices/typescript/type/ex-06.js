var ObjectManager = /** @class */ (function () {
    function ObjectManager() {
        this.items = [];
    }
    ObjectManager.prototype.addItem = function (item) {
        this.items.push(item);
    };
    ObjectManager.prototype.removeItem = function (item) {
        var index = this.items.indexOf(item);
        if (index !== -1) {
            this.items.splice(index, 1);
        }
    };
    ObjectManager.prototype.getAllItems = function () {
        return this.items;
    };
    ObjectManager.prototype.getItemById = function (id) {
        return this.items.find(function (item) { return item.id === id; });
    };
    ObjectManager.prototype.clear = function () {
        this.items = [];
    };
    return ObjectManager;
}());
var personManager = new ObjectManager();
personManager.addItem({ id: 1, name: "John", age: 25 });
personManager.addItem({ id: 2, name: "Alice", age: 30 });
// Lấy toàn bộ danh sách
var allPersons = personManager.getAllItems();
console.log("All Persons:", allPersons);
// Tìm Person theo id
var foundPerson = personManager.getItemById(1);
console.log("Found Person:", foundPerson);
// Xóa một Person khỏi danh sách
var personToRemove = { id: 2, name: "Alice", age: 30 };
personManager.removeItem(personToRemove);
// Lấy lại danh sách sau khi xóa
var updatedPersons = personManager.getAllItems();
console.log("Updated Persons:", updatedPersons);
// Xóa toàn bộ danh sách
personManager.clear();
var emptyList = personManager.getAllItems();
console.log("Empty List:", emptyList);
