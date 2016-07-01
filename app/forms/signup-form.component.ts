import {Component} from '@angular/core';
import {ControlGroup,Control,Validators,FormBuilder} from '@angular/common';
import {UsernameValidators} from './usernameValidators';


@Component({
    selector: 'signup-form',
    templateUrl: 'app/forms/signup-form.component.html'
})
export class SignUpFormComponent {
    form : ControlGroup;

    constructor(fb: FormBuilder){
       this.form = fb.group({
            username: ['',Validators.compose([
                          Validators.required,
                          UsernameValidators.cannotContainSpace])],
            password: ['',Validators.required]
        })
    }
    signup(){
        console.log(this.form.value);
    }
}