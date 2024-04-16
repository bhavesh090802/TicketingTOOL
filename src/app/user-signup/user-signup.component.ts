import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.scss']
})
export class UserSignupComponent {
  usersignupForm: FormGroup;
  hide = true;
  constructor(private _fb: FormBuilder,){
    this.usersignupForm=this._fb.group({
      name:'',
      uemail:'',
      username:'',
      password:''
    })
  }

  onSignupFormSubmit(){

  }
}
