import { BabysuitService } from './../../../services/babysuit.service';
import { Babysuit } from './../../../models/babysuit';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-babybodysuits',
  templateUrl: './babybodysuits.component.html',
  styleUrls: ['./babybodysuits.component.css']
})
export class BabybodysuitsComponent implements OnInit {

  products: Babysuit[] = []

  constructor(private babysuitservice: BabysuitService) { }

  ngOnInit(): void {
    this.babysuitservice.getProducts().subscribe((products) => {
      this.products = products;
    })
  }

}
