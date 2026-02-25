import { Component } from '@angular/core';
import { AuthService } from '../../services/auth';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  email: string = '';
  password: string = '';
  error: string = '';

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  onLogin() {
    console.log('Login Clicked');
    this.authService.login(this.email, this.password).subscribe({
      next: (res) => {
        console.log('Login successful:', res);
        localStorage.setItem('token', res.token); // <- save token
        this.router.navigate(['/profile']); // <- go to profile page
      },
      error: (err) => {
        this.error = err.error.message || 'Login failed';
      },
    });
  }

  onRegister() {
    this.router.navigate(['/register']);
  }
}
