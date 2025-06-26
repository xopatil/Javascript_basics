class Student{
  name:string
  id:number
  constructor(name:string,id:number){
    this.name=name
    this.id=id
  }
}
function getStudentInfo<Student>(student:Student):Student{
  return student
}
const s = new Student("soham",1)
console.log(getStudentInfo(s));

