import { Babyproduct } from './../../../models/babyproduct';
import { BabyproductService } from './../../../services/babyproduct.service';
import { Component, OnInit , Input } from '@angular/core';


@Component({
  selector: 'app-clothingset',
  templateUrl: './clothingset.component.html',
  styleUrls: ['./clothingset.component.css']
})
export class ClothingsetComponent implements OnInit {

  products: Babyproduct[] = []
  
  constructor(private babyproductService: BabyproductService) { }

  ngOnInit() {
    this.babyproductService.getProducts().subscribe((products) => {
      this.products = products;
    })
  }

}
