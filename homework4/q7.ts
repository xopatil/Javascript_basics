abstract class Institute{
  abstract getInstituteType():void;
}
class Student{
  name:string
  id:number
  constructor(name:string,id:number){
    this.name=name
    this.id=id
  }
}
interface Management{
  addStudent(student:Student):void;
  removeStudent(id:number):void;
}

class School implements Management{
  StudentList : Student[]=[];
  addStudent(student: Student): void {
    this.StudentList.push(student)
    console.log(this.StudentList);  
    console.log("---------------");
    
  }
  removeStudent(id: number): void {
      this.StudentList = this.StudentList.filter(student => student.id !== id);
      console.log(this.StudentList);
      console.log("---------------");
  }
}
const s = new Student("John", 1);
const s1 = new Student("Doe", 2);
const school = new School();
school.addStudent(s);
school.addStudent(s1);
school.removeStudent(1);