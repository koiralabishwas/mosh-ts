var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Object.defineProperty(Person.prototype, "fullName", {
        get: function () {
            return this.firstName + ' ' + this.lastName;
        },
        enumerable: false,
        configurable: true
    });
    Person.prototype.walk = function () {
        console.log('waling');
    };
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(
    // need to add all properties including the inherited properties
    studenId, firstName, lastName) {
        // call parent Class property inside super()
        var _this = _super.call(this, firstName, lastName) || this;
        _this.studenId = studenId;
        return _this;
    }
    Student.prototype.takeTest = function () {
        {
            console.log('Taking the tests');
        }
    };
    return Student;
}(Person));
var student = new Student(1, "Bishwas", "Koirala");
//  student. has all methods and properties from PersonClass + StudentClass
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Teacher;
}(Person));
var teacher = new Teacher("Johs", "Smith");
console.log(teacher.fullName);
