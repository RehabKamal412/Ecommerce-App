import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from "@angular/forms";
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
// import { AuthService } from './../_services/auth.service';

// import { ConfirmedValidator } from '../must-match/validate-password'


@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.css']
})
export class RegisterationComponent{
  error : string = ""

  registerForm = new FormGroup({
    'username': new FormControl(null, [Validators.required,]),

    'email': new FormControl(null, [Validators.email, Validators.required]),

    'password' : new FormControl(null,[Validators.required,]),
      // Validators.pattern('[A-Z][a-z0-9]{3,8}$')
    'confirmPassword' : new FormControl(null,[Validators.required]),

  })

  constructor( private router : Router, private _http : HttpClient) { }

  //! Registration Form 

  submitRegistirationForm(registerForm:FormGroup)
  {
    alert("submitted");
    if(registerForm.invalid){
      console.log('failed')
    }
    console.log(registerForm.value);
  }

  

 



}


