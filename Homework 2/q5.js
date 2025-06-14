function calculateTotalCost(discountRate = 20, ...prices) {
    const itemTotal = prices.reduce((sum, price) => sum + price, 0);
    const discount = (discountRate / 100) * itemTotal;
    return itemTotal - discount;
}
const total = calculateTotalCost(undefined, 100, 200, 300); 
console.log(total); 
