import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  sections:string[] = ["Home", "About", "Work", "Skills", "Contact"];

  constructor() {
   }

  ngOnInit(): void {
  }

}
