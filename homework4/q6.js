var Student = /** @class */ (function () {
    function Student(name, id) {
        this.name = name;
        this.id = id;
    }
    return Student;
}());
function getStudentInfo(student) {
    return student;
}
var s = new Student("soham", 1);
console.log(getStudentInfo(s));
