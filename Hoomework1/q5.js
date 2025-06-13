const marks = [95,90,87,76,65,54,43]

const calculateGrade = marks.map((marks)=>{
  if (marks >=90)
    return 'A'
  else if(marks >= 80)
    return 'B'
  else if(marks >= 70)
    return 'C'
  else
    return 'D'
})
console.log(calculateGrade);

const above75 = marks.filter((marks)=>{
  return marks >75
})
console.log(above75)

const sum = marks.reduce((accumulator,currentValue)=>{
  return accumulator + currentValue
},0)
console.log(sum);

//'...' spread operator unpack the values 
const maxvalue = marks.reduce((accumulator, currentValue) => {
  /* 
  if (accumulator > currentValue) {
  return accumulator;
} else {
  return currentValue;
}
  */
  return accumulator > currentValue ? accumulator : currentValue;
})
console.log(maxvalue)

//maximum value in an array using the function 
array =[12,34 ,45 ,66,78,89]
function findmaxvalues(array){
  return array.reduce((accumulator, currentValue) => {
  /* 
  if (accumulator > currentValue) {
  return accumulator;
} else {
  return currentValue;
}
  */
  return accumulator > currentValue ? accumulator : currentValue;
})
}
console.log(findmaxvalues(array));
// Math.max(...arr) iterate over each  value of the array and return the maximum value 