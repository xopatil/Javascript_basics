interface Attendance {
  markAttendance():void;
}
class Student implements Attendance{
  name:string
  id:number
  attendance:boolean
  constructor(name:string,id:number,attendance:boolean){
    this.name = name
    this.id=id
    this.attendance=attendance
  }
  markAttendance(): void {
    if(this.attendance = true){
      console.log( this.name +" "+"is present");
    }else{
      console.log(this.name +" "+ "is absent");  
    }   
  }
}
const s = new Student("soham",1,true)
s.markAttendance()