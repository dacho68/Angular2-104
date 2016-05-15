// core of angular2. always need it
import {Component} from 'angular2/core';
import {ContactFormComponent} from './forms/contact-form.component';



@Component({
    // element selector my-app
    selector: 'my-app',


    template: `<h1>Welcome to Angular 2 - 104</h1>
              <h4>Basic Form</h4>
              <contact-form></contact-form>
              `,
              
    // including those components
   directives:[ContactFormComponent]
})

export class AppComponent {
 
}