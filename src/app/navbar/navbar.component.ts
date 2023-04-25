import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  sections:string[] = ['Home', 'About', 'Work', 'Skills', 'Contact'];
  currentSection: string = 'Home';

  constructor() {
   }

  ngOnInit(): void {
  }

  setActive(section: string): void {
    this.currentSection = section;
  }

  onSectionChange(section: any): void {
    this.currentSection = section.replace(/^./, section[0].toUpperCase());
  }

  scrollTop(): void {
    window.scrollTo(0, 0);
    this.currentSection = 'Home';
  }
}
