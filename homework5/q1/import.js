const db = require("./database");
function insertData(name,salary,department){
  const sql = "insert into students(name,salary,department) values (?,?,?)"
  db.query(sql,[name,salary,department],(err)=>{
    if(err){
      console.log(err);
    }else{
      console.log("inserted");
    }
  })
}  
function deleteData(name){
  const sql ="delete from students where name=?"
  db.query(sql,[name],(err)=>{
    if(err){
      console.log(err);
    }else{
      console.log("deleted successfully"); 
    }
  })
}
function updateData(name,salary,department){
  const sql = "update students set salary=?, department=? where name=?"
  db.query(sql,[salary,department,name],(err)=>{
    if(err){
      console.log(err);
    }else{
      console.log("updated successfully");
    }
  })  
}
function showData(name){
  sql ="select * from students"
  db.query(sql,[],(err,result)=>{
    if(err){
      console.log(err);
    }else{
      console.log("here is the daata u requested");
      console.log(result)
      console.table(result);
    }
  })

}
insertData("Soham",12000,"IT")
insertData("Soham2",12000,"IT")
insertData("Soham3",12000,"IT")
deleteData("Soham2")
updateData("Soham3",15000,"HR")    

showData("")