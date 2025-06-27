const mysql = require("mysql");
const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "soham1234",
  database: "emp"
})
conn.connect((err)=>{
  if(err){
    console.log("error connecting to the database");
    
  }else{
    console.log("connected succesfully");
    
  }
})
module.exports = conn;
