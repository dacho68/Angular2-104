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
- [104](https://github.com/dacho68/Angular2-104) - Forms and Validations.
- [Connectivity](https://github.com/dacho68/Angular2-Connectivity) - Connecting to the server.

## Zen Code

for more details, please read the [johnpapa.net](https://johnpapa.net/zen-coding-in-visual-studio-2012/) blog
``` html
  div.form-froup>label+input.form-control[type='text']
  
  other example.

  ul>li*5
  
```
Leave the cursor at the end, then press [tab]. this will generate

``` html
     <div class="form-group">
        <label for="firstName">First Name</label>
        <input id="firstName" type="text" class="form-control">
    </div>
    
    <ul>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
   </ul>
```

## Basic Form

``` html
<form>
    <div class="form-­‐group">
        <label for="name">Name</label>
        <input type="text" id="name" class="form-­‐control">
    </div>
    <button type="submit" class="btn btn-­‐primary">Submit</button>
</form>
```

## Angular Form with Simple Validation
Controls are created implicitly by Angular. This will give us limited control over validation
(eg required, min length and max length via HTML5 attributes).

**Example :**

``` html
<form [ngFormModel]="signupForm">
    …
    <input ngControl="name">
    …
    <input ngControl="email">
    <div ngControlGroup="billing">
        <input ngControl="cardNumber">
        …
        <input ngControl="expiry">
    </div>
</form>

``` 

A form contains controls or groups of controls.  A Control and ControlGroup the have several properties:
- value
- touched
- untouched
- dirty
- prestine
- valid
- errors

![Control](./images/simple_control.jpg)
![ControlGroup](./images/control-group.jpg)

### Showing Validation Errors

``` html
<input #name="ngForm" ngControl=“name" required>
<div
    class="alert alert-­‐danger"
    *ngIf="name.touched && !name.valid">
        Name is required.
</div>
``` 

### Showing Specific Validation Errors

``` html
<input #name="ngForm" ngControl="name" required minlength="3" >
<div *ngIf="name.touched && name.errors"> 
    <div *ngIf="name.errors.required" class="…">
        Name is required.
    </div>
    <div *ngIf="name.errors.minlength" class="…">
        Name should be minimum 3 characters.
    </div>
</div>
``` 

### Disabling the submit button if form is invalid

``` html
<form #f="ngForm">
...
<button [disabled]="!f.valid">Submit</button>
</form>
``` 

### Submiting the form

``` html
<form #f="ngForm" (ngSubmit)="onSubmit(f.form)">
...
<button type="submit">Submit</button>
</form>
``` 

## Complex Validation

For the complex validation you have explicitly add the controls to your component.
![component](./images/ComplexValidation_Component.jpg)
![html](./images/ComplexValidation_Html.jpg)

### Using Form Builder Class

![html](./images/FB_Component.jpg)

### Custom Validator

![UserValidator Component](./images/UserValidator.jpg)

![User UserValidator](./images/Use_UserValidator.jpg)

### Async Validation
Use for calling the server for the validation. When using more than one custom or async validator, we use the compose or
composeAsync methods:
``` typescript
[
    defaultValue,
    Validators.compose([v1,v2]),
    Validators.composeAsync([v3,v4])
];
```

To show a loader when an async validator is in progress:

``` html
<input ngControl="name">
<div *ngIf="name.control.pending">Checking for uniqueness…</div>
```

![UserValidator Component](./images/Async_Validator.jpg)

![User UserValidator](./images/Use_Async_Validator.jpg)
**References **

### Validating Upon Form Submit
In the submit method you call the service for validation, if there is an error, you call setErrors method of the control.

``` typescript
    signup(){
        //var result = authService.login(this.form.value);
        this.form.find('username').setErrors({
            invalidLogin: true
        });
        console.log(this.form.value);
    }
```


[Forms from the angular.io website](https://angular.io/docs/ts/latest/guide/forms.html)