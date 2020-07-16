import { Babyproduct } from './../../models/babyproduct';
import { MessengerService } from './../../services/messenger.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems = [
    //{ id:1 , productId:1, productName:'test1', qty: 4, price:200 },
    //{ id:2 , productId:3, productName:'test3', qty: 4, price:100 },
    //{ id:3 , productId:2, productName:'test2', qty: 4, price:300 },
    //{ id:4 , productId:4, productName:'test4', qty: 4, price:400 },
  ];

  cartTotal = 0 

  constructor(private msg: MessengerService) { }

  ngOnInit() {

    this.msg.getMsg().subscribe((product : Babyproduct )=> {
      
      this.cartItems.push({
        productName: product.name,
        qty:1,
        price: product.price
      })

      this.cartTotal = 0
      this.cartItems.forEach(item => {
        this.cartTotal += (item.qty * item.price)
      })
      
    })

}
}
