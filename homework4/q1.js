var Student = /** @class */ (function () {
    function Student(name, StudentId, grade, address) {
        this.name = name;
        this.StudentId = StudentId;
        this.grade = grade;
        this.address = address;
    }
    Student.prototype.displayInfo = function () {
        console.log(this.name + " " + this.StudentId + " " + this.grade + " " + this.address);
    };
    return Student;
}());
var s = new Student("soham", 1, "A", "borivali");
s.displayInfo();
