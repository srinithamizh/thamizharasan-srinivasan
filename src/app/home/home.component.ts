import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  designation: string[] = ['Software Engineer', 'Full Stack Developer']
  role: string  ='';
  constructor() { }

  ngOnInit(): void {
    let index=0, cursor=0, type=true;
    setInterval(() => {
      let word = this.designation[index];
      let length = word.length;

      if (type) {
        this.role = word.slice(0, cursor)+'|';
        cursor++;
      }

      if (cursor === length + 1) { 
        type = false;
      }

      if (!type) {
        this.role = word.slice(0, cursor)+'|';
        cursor--;
      }

      if (cursor === 0) {
        type = true;
        index++;
      }

      if (index === this.designation.length) { 
        index = 0;
      }
    }, 100);
  }
}


