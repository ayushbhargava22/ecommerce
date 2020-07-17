import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  
  show = true;
  toggleShow() {
    this.show = !this.show;
  }
  
  hidden = false ;
  toogleHidden() {
    this.hidden = !this.hidden
  }

  visibility = 'visible';
  toggleVisible() {
    this.visibility =
      this.visibility == 'visible' ? 'hidden' : 'visible' ;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
