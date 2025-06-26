abstract class Person {
  name:string;
  age:number;
  abstract getDetails():void;
  abstract getRole():void;
}
class Student extends Person {
  constructor(name:string,age:number){
    super();
    this.name= name
    this.age = age
  }
  getDetails(): void {
    console.log(this.name+ " " +this.age);
  }
  getRole(): void {
    console.log("student");
  }
}
const s = new Student("soham",1)
s.getDetails()
s.getRole()

