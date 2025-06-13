const students = [

  {
    name:"soham",
    marks:90,

  },
  {
    name:"soham patil",
    marks:94,
  },
  {
    name:"sohammmmm",
    marks:906,
  }
]

const filtermarks = students.filter((student)=>{
  return student.marks >90
})

const sum = students.reduce((marks,total)=>{
  return total + marks
},0)
console.log(sum);