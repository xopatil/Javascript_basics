
function inventoryManagement(productquantity){
  if (productquantity < 5){
    try {
            throw new Error("Inventory has fallen below the threshold , please restock the inventory")
        } catch (error) {
            console.log(error.name+":"+error.message);
        }
}
}
inventoryManagement(3);
