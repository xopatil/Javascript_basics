function filterpassedstudents(marks){
  return marks.filter(function(marks){
    return marks >= 40
  })
}
marks =[10,20,30,40,50]
console.log(filterpassedstudents(marks))
