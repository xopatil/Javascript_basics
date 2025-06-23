export const a= 10
export function add(a,b){
  console.log(a+b);
}

export class C{
  id;
  name;
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
  display(){
    console.log(`ID: ${this.id}, Name: ${this.name}`);
  }
  
}