function addtoCart(itemStock) {
    if (itemStock == 0){
      throw new Error("item is out of stock, please try again later ")
    }
}
function meth1() {
    addtoCart(0);
}
function meth2() {
    try {
        meth1()
    } catch (error) {
        console.log(error.name+" : "+error.message);
    }
}
meth2()