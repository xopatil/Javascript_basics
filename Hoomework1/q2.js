const calculateGrade = (score) =>{
    if (score >= 90) {
        return 'A'
    } else if (score >= 80) {
        return 'B'
    } else if (score >= 70) {
        return 'C'
    } else return 'D'
  }
console.log(calculateGrade(60))
