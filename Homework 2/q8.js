
function UpdateCustomerProfile(CustomerData){
  if (CustomerData == null || CutomerData == undefined){
    try {
            throw new Error("Please provide the correct customer data")

        } catch (error) {
            console.log(error.name+":"+error.message);
        }
    finally{    console.log("Process not completed , data is not updated ,please enter the valid data ");}
    
  }
}
UpdateCustomerProfile(null);                      
