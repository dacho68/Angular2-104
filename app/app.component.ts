// core of angular2. always need it
import {Component} from '@angular/core';
import {ContactFormComponent} from './forms/contact-form.component';
import {SubscriptionFormComponent} from './exercises/subscription-form.component';
import {SignUpFormComponent} from './forms/signup-form.component';

@Component({
    // element selector my-app
    selector: 'my-app',


    template: `<h1>Welcome to Angular 2 - 104</h1>
              <h2>Simple Validation</h2>
              <contact-form></contact-form>
              <h2>Complex Validation</h2>
              <h3>Signup Form</h3>
              <signup-form></signup-form>
              <h2>Exercise </h2>
              <h3>Subscription Form</h3>
              <subscription-form></subscription-form>
              `
              
              ,
              
    // including those components
   directives:[ContactFormComponent,SubscriptionFormComponent,SignUpFormComponent]
})

export class AppComponent {
 
}