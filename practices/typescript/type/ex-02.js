var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var Gender;
(function (Gender) {
    Gender["MALE"] = "male";
    Gender["FEMALE"] = "female";
    Gender["OTHER"] = "other";
})(Gender || (Gender = {}));
;
var human1 = {
    name: 'logi',
    age: 20,
    gender: Gender.MALE
};
function updateInfo(human, updateFields, newValue) {
    // human[updateFields] = newValue;
    var _a;
    return __assign(__assign({}, human), (_a = {}, _a[updateFields] = newValue, _a));
}
var human2 = updateInfo(human1, 'age', 30);
console.log(human2);
