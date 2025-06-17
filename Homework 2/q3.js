function payment(success) {
  return new Promise((resolve,reject)=>{
    if(success){
      resolve("Payment succcessful")
    }else{
      reject("payment failed")
    }
  })
}
//.then() and .catch() methods to resolve or reject the promise 
payment(true).then((result)=>{
  console.log(result);
}).catch((err)=>{
  console.log(err);
})

async function test(){
  try {
    const result = await payment(false)
    console.log(result);
  }catch(error){
    console.log(error);
  }
}
test()