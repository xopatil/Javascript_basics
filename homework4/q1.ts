class Student{
  name:String;
  StudentId:number;
  grade:String;
  address:String;
  constructor(name:String,StudentId:number,grade:String,address:String){
    this.name =name;
    this.StudentId =StudentId;
    this.grade =grade;
    this.address=address;
  }
  displayInfo():void{
    console.log(this.name +" "+this.StudentId+" "+this.grade+" "+this.address);
  }
}
const s = new Student("soham",1,"A","borivali");
s.displayInfo();