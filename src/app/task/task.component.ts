import { Component } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  Products = [
    { Productname: 'pen', price: 30, rating: 3, Freedelivery : 'true'},
    { Productname: 'phone', price: 10000, rating: 2, Freedelivery : 'false'},
    { Productname: 'shirt', price: 1000, rating: 4, Freedelivery : 'true'},
    { Productname: 'cap', price: 200, rating: 5, Freedelivery : 'false'},
    { Productname: 'mobile case', price: 300, rating: 2, Freedelivery : 'true'},
    { Productname: 'remote', price: 400, rating: 2.5, Freedelivery : 'false'},
  ];

  delete(index:number){
    this.Products.splice(index,1);
}
filterData:string='';
  search(){
    this.Products=this.Products.filter((Productname:any)=>Productname.name.includes(this.filterData));
  }
   proName:string='';
  price:number=0;
  rating:number=0;
  Freedelivery:string='true' ;
  add(){
    let user={
      proname:this.proName,
      price:this.price,
      rating:this.rating,
      Freedelivery:this.Freedelivery
    };
    
    

}
sort(){
    this.Products.sort((a:any,b:any)=>b.price-a.price);
  }
  sort1(){
    this.Products.sort((a:any,b:any)=>a.price-b.price);
  }
  sort2(){
    this.Products.sort((a:any,b:any)=>a.rating-b.rating);
}
sort3(){
    this.Products.sort((a:any,b:any)=>b.rating-a.rating);
}
isDiscountApplied = false;

 applyDiscount() {
    this.Products = this.Products.map(product => ({
      ...product,
      price: product.price * 0.5
    }));
  }
  calculateTotalPrice() {
    const total = this.Products.reduce((sum, item) => sum + item.price, 0);
    alert(`Total Price: ₹${total}`);
  }
  totalItems: number = 0;

  getTotalItems() {
    alert(`Total Items in Cart: ${this.Products.length}`);
  }
  addDeliveryCharges() {
    const deliveryFee = 50;
    this.Products = this.Products.map(product => ({
      ...product,
      price: product.Freedelivery === 'false' ? product.price + deliveryFee : product.price
    }));
  }
  Cart: any[] = [];

  addToCart(product: any) {
    this.Cart.push({ product });
  }
  
}


