class InvalidateCouponcode extends Error{
constructor(message){
  super(message)
  this.name="InvalidateCouponcode"
}
}
function validateCouponCode(couponCode){
  if (couponCode.length > 5){
    try {
            throw new InvalidateCouponcode("Invalid coupon code, please enter a valid coupon code")
        } catch (error) {
            console.log(error.name+":"+error.message);
        }
    finally{    console.log("validation completge");}
    
  }
}
validateCouponCode("1234567");
