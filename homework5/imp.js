const db = require("./db");
function insertData(name,price){
  const sql = "insert into product(name,price) values (?,?)"
  db.query(sql,[name,price],(err)=>{
    if(err){
      console.log(err);
    }else{
      console.log("inserted");
      
    }
  })
}  
function deleteData(name){
  const sql ="delete from product where name=?"
  db.query(sql,[name],(err)=>{
    if(err){
      console.log(err);
    }else{
      console.log("deleted successfully");
      
    }
  })
}
function showData(name){
  sql ="select * from product "
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
// insertData("laptop",12000)
// insertData("phone",12000)
// insertData("tv",12000)
// insertData("hehe",12000)
// deleteData("laptop")
showData("")