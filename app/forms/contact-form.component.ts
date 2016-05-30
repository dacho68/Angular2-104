import {Component } from 'angular2/core';

@Component({
    selector: 'contact-form', 
    templateUrl: "app/forms/contact-form.component.html",
   directives:[],
})

export class ContactFormComponent {
  
  onSubmit(form){
    console.log(form);
  }
  
}