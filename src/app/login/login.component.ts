import { Component } from '@angular/core';

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

  login() {
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
}
  


