import { Babyproduct } from './../../../models/babyproduct';
import { BabyproductService } from './../../../services/babyproduct.service';
import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'app-clothingsetitem',
  templateUrl: './clothingsetitem.component.html',
  styleUrls: ['./clothingsetitem.component.css']
})
export class ClothingsetitemComponent implements OnInit {


  @Input() clothingsetItem : Babyproduct

  constructor() { }

  ngOnInit(): void {
  }

}
