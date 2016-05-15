# Angular2-104
In this section you will learn of how to build forms and validations. In Angular, there are 2 types of forms : Template-Driven and
Model-Driven Forms.

The Template-Driven is easier to implement but it's limited to the validation. In other hand, the Model-Driven requires more code but you have full control over validation.
Most of the samples are from the course [Angular 2 with TypeScript](https://www.udemy.com/angular-2-tutorial-for-beginners/learn/v4/overview) by Mosh Hamedi on Udemy.
I'm developping the Angular 2 samples along way I'm learning Angular 2. If you have time, I recommend you to take the course because it has richer contents.

- [Jumpstart](https://github.com/dacho68/Angular2-Jumpstart) - Quick understanding of how to build an App with Angular 2.
- [101](https://github.com/dacho68/Angular2-101) - Property Binding, Class and Style Binding, Event Binding, Two way Binding.
- [102](https://github.com/dacho68/Angular2-102) - Component API in depth, Input and Output properties.
- [103](https://github.com/dacho68/Angular2-103) - Controlling Rendering of the HTML - ngId, ngSwitch, ngFor, Leading *, Pipes, ngClass, ngStyle, Elvis Operator, ng-content. 
- 104 - Forms and Validations.

## Zen Code

for more details, please read the [johnpapa.net](https://johnpapa.net/zen-coding-in-visual-studio-2012/) blog
``` html
  div.form-froup>label+input.form-control[type='text']
```
Leave the cursor at the end, then press [tab]. this will generate

``` html
     <div class="form-group">
        <label for="firstName">First Name</label>
        <input id="firstName" type="text" class="form-control">
    </div>
```



## Basic Form

**References **

[Forms from the angular.io website](https://angular.io/docs/ts/latest/guide/forms.html)