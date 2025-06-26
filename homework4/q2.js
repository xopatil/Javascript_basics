var Student = /** @class */ (function () {
    function Student(name, age, grade) {
        this.name = name;
        this.age = age;
        this.grade = grade;
        School.totalStuents++;
    }
    return Student;
}());
var School = /** @class */ (function () {
    function School() {
        this.studentList = [];
    }
    School.prototype.addStudent = function (student) {
        this.studentList.push(student);
    };
    School.prototype.getTotalCount = function () {
        console.log(School.totalStuents);
    };
    School.totalStuents = 0;
    return School;
}());
var s = new Student("John", 20, "A");
var s2 = new Student("Jane", 22, "B");
var s3 = new Student("Doe", 21, "C");
var school = new School();
school.addStudent(s);
school.addStudent(s2);
school.addStudent(s3);
console.log(school.studentList);
school.getTotalCount();
