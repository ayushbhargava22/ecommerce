import { Babysuit } from './../../../models/babysuit';
import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-babybodysuitsitem',
  templateUrl: './babybodysuitsitem.component.html',
  styleUrls: ['./babybodysuitsitem.component.css']
})
export class BabybodysuitsitemComponent implements OnInit {

  @Input() babybodysuitsitem : Babysuit

  constructor() { }

  ngOnInit(): void {
  }

}
