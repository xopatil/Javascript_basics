var Student = /** @class */ (function () {
    function Student(name, id, attendance) {
        this.name = name;
        this.id = id;
        this.attendance = attendance;
    }
    Student.prototype.markAttendance = function () {
        if (this.attendance = true) {
            console.log(this.name + " " + "is present");
        }
        else {
            console.log(this.name + " " + "is absent");
        }
    };
    return Student;
}());
var s = new Student("soham", 1, true);
s.markAttendance();
