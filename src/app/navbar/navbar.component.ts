import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  sections:string[] = ['Home', 'About', 'Work', 'Skills', 'Contact'];
  currentSection: string = '';

  constructor() {
   }

  ngOnInit(): void {
  }

  setActive(section: string) {
    this.currentSection = section;
  }

  onSectionChange(section: any) {
    this.currentSection = section.replace(/^./, section[0].toUpperCase());
  }
}
