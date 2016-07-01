import {Component } from '@angular/core';

@Component({
    selector: 'subscription-form', 
    templateUrl: "app/exercises/subscription-form.component.html",
    directives:[],
})


export class SubscriptionFormComponent {

    frequencies = [
        { id: 1, label: 'Daily' }, 
        { id: 2, label: 'Weekly' },
        { id: 3, label: 'Monthly' }
    ];

  onSubmit(form:any){
    console.log(form.value);
  }
}