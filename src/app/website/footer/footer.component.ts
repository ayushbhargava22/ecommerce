import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  show = false;
  aboutDrop() {
    this.show = !this.show;
  }
  
  isDisplay = true;
  toggleDisplay() {
    this.isDisplay = !this.isDisplay;
  }

  showMe:boolean=false
  constructor() { }

  careShow:boolean=false
  ngOnInit(): void {
  }
  toogleTag(){
    this.showMe=!this.showMe;
  }
  toogleCare() {
    this.careShow=!this.careShow;
  }

}
