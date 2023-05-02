import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import * as _ from 'lodash';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  year: number = 2023;
  size: number = 28;
  myForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    subject: new FormControl(''),
    body: new FormControl('')
  });

  onSubmit() {
    let name = this.myForm.controls['name'].value?.split(' ').join('%20');
    let email = this.myForm.controls['email'].value;
    let subject = this.myForm.controls['subject'].value?.split(' ').join('%20');
    let body = this.myForm.controls['body'].value?.split(' ').join('%20');
    const url: string  = `https://mail.google.com/?view=cm&to=${email}&su=${subject}&body=${body}%0AThanks,%0A${name}`;
    console.log("https://mail.google.com/?view=cm&to=%s&su=%s&body=%s%0AThanks,%0A%s", email, subject, body, name);
    this.router.navigateByUrl(url).then(result => {  window.open(url, '_blank'); });;
  }

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.year = new Date().getFullYear();
  }

}


