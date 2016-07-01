// core of angular2. always need it
import {Component} from '@angular/core';
import {ContactFormComponent} from './forms/contact-form.component';
import {SubscriptionFormComponent} from './exercises/subscription-form.component';


@Component({
    // element selector my-app
    selector: 'my-app',


    template: `<h1>Welcome to Angular 2 - 104</h1>
              <h4>Basic Form</h4>
              <contact-form></contact-form>
              <h2>Exercise 1</h2>
              <subscription-form></subscription-form>
              `
              
              ,
              
    // including those components
   directives:[ContactFormComponent,SubscriptionFormComponent]
})

export class AppComponent {
 
}