import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html'
})
export class SignupComponent {

  signupForm
  isLoading
  msg = '';
  isError = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private routes: Router
    ) {
    this.signupForm = this.formBuilder.group({
      username: '',
      password: ''
    });
  }
  
  getButtonStyle(): string{
    return this.isLoading ? '#076aac73' : '#076aace8';
  }

  onSubmit(formData){
    this.isLoading = true;
    this.authService
      .signUp(formData.username,formData.password)
      .subscribe(response => {
        this.isError = false;
        this.msg = response;
        this.isLoading = false;
      }, error => {
        this.isError = true;
        this.msg = error;
        this.isLoading = false;
      });
  }

}
