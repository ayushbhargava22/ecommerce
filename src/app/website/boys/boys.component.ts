import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boys',
  templateUrl: './boys.component.html',
  styleUrls: ['./boys.component.css']
})
export class BoysComponent implements OnInit {

  show = true;
  toggleShow() {
    this.show = !this.show;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
