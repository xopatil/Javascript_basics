function handlingcheckouterrors(payment,network) {
  try{
    if(payment == null|| network !== "online"){
      throw new Error("payment not completed, please try again")
    }
  }catch(error){
    console.log(error.name + ":" +error.message);  
  } 
}
handlingcheckouterrors("","offline");