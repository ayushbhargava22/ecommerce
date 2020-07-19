import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  show = false;
  navLinks() {
    this.show = !this.show;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
