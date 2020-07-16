import { Babyproduct } from './../models/babyproduct';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class BabyproductService {

 products : Babyproduct[] = [
   new Babyproduct(1, 'product1' , 'this is product one' , 100),
   new Babyproduct(2, 'product2' , 'this is product two' , 200),
   new Babyproduct(3, 'product3' , 'this is product three' , 300),
   new Babyproduct(4, 'product4' , 'this is product four' , 400),
   new Babyproduct(5, 'product5' , 'this is product five' , 500),
   new Babyproduct(6, 'product6' , 'this is product six' , 600),
   new Babyproduct(7, 'product7' , 'this is product seven' , 700),
 ]

  constructor() { }

  getProducts(): Babyproduct[] {
    return this.products
  }
}
