// function addtoCart(itemStock) {
//     if (itemStock == 0){
//       throw new Error("item is out of stock, please try again later ")
//     }
// }
// function meth1() {
//     addtoCart(0);
// }
// function meth2() {
//     try {
//         meth1()
//     } catch (error) {
//         console.log(error.name+" : "+error.message);
//     }
// }
// meth2()

function addtoCart(){
    try{
        checkStock(2);
        console.log("item added to cart");  
    }catch(error){
        console.log(error.name+" : "+error.message);
    }

}
function checkStock(stock){
    if (stock <3){
        throw new Error("produc count is less than 3, please restock");      
    }
}
addtoCart()
