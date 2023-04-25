import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as _ from 'lodash';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  sections:string[] = ['Home', 'About', 'Work', 'Skills', 'Contact'];
  currentSection: string = 'Home';

  constructor(private Router:Router) {
   }

  ngOnInit(): void {
  }

  setActive(section: string): void {
    this.currentSection = section;
  }

  onSectionChange(section: any): void {
    this.Router.navigateByUrl('#'+section);
    this.currentSection = _.capitalize(section);
  }

  scrollTop(): void {
    window.scrollTo(0, 0);
    this.currentSection = 'Home';
  }
}
