class Student{
  name:string;
  age:number;
  grade:string;
  constructor(name: string, age: number, grade: string) {
    this.name = name;
    this.age = age;
    this.grade = grade;
    School.totalStuents++;
  }
}


class School{
  static totalStuents: number =0;
  studentList: Student[] = [];
  addStudent(student:Student):void{
    this.studentList.push(student)
  }
  getTotalCount():void{
    console.log(School.totalStuents);
  }
}
const s = new Student("John", 20, "A");
const s2 = new Student("Jane", 22, "B");    
const s3 = new Student("Doe", 21, "C");
const school = new School();
school.addStudent(s);
school.addStudent(s2);
school.addStudent(s3);
console.log(school.studentList);

school.getTotalCount();