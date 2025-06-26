var Institute = /** @class */ (function () {
    function Institute() {
    }
    return Institute;
}());
var Student = /** @class */ (function () {
    function Student(name, id) {
        this.name = name;
        this.id = id;
    }
    return Student;
}());
var School = /** @class */ (function () {
    function School() {
        this.StudentList = [];
    }
    School.prototype.addStudent = function (student) {
        this.StudentList.push(student);
        console.log(this.StudentList);
        console.log("---------------");
    };
    School.prototype.removeStudent = function (id) {
        this.StudentList = this.StudentList.filter(function (student) { return student.id !== id; });
        console.log(this.StudentList);
        console.log("---------------");
    };
    return School;
}());
var s = new Student("John", 1);
var s1 = new Student("Doe", 2);
var school = new School();
school.addStudent(s);
school.addStudent(s1);
school.removeStudent(1);
