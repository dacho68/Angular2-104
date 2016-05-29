import {Component } from 'angular2/core';

@Component({
    selector: 'contact-form', 
    templateUrl: "app/forms/contact-form.component.html",
   directives:[],
})

export class ContactFormComponent {
  log(x){
    console.log(x);
  }
}