class Product{
  name;
  product_id;
  price;
  constructor(name,product_id,price){
    this.name=name;
    this.product_id=product_id;
    this.price=price;
  }

  display(){
    console.log(this.name+" "+this.product_id+" "+this.price);
  }

}

const product1 = new Product("laptop",1,2222222);
product1.display();
