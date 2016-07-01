import {Component } from '@angular/core';

@Component({
    selector: 'contact-form', 
    templateUrl: "app/forms/contact-form.component.html",
   directives:[],
})

export class ContactFormComponent {
  
  onSubmit(form:any){
    console.log(form);
  }
  
}