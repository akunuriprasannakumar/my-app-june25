import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  showPassword: boolean = false;
  errorMessage: string = '';

  signin() {
    const validUsername = 'admin';
    const validPassword = 'password123';

    if (this.username === validUsername && this.password === validPassword) {
      console.log('Login successful!');
      this.errorMessage = '';
    } else {
      this.errorMessage = 'Invalid username or password';
    }
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  public loginForm:FormGroup=new FormGroup({
    email:new FormControl(),
    password:new FormControl(),
  })
  constructor(private _loginService:LoginService, private _router:Router){}

  login(){
    console.log(this.loginForm.value);
    this._loginService.userLogin(this.loginForm.value).subscribe(
      (data:any)=>{
        alert("Login Succesfully!");
        this._router.navigateByUrl("/dashboard");
        sessionStorage.setItem('token',data.token)
      },(err:any)=>{
        alert("Internal Server Error")
      }
    )
  }
}
  


