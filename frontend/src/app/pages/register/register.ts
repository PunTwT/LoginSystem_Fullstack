import { Component } from '@angular/core';
import { AuthService } from '../../services/auth';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-register',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  email: string = '';
  password: string = '';
  error: string = '';

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  onRegister() {
    console.log('Register Clicked');
    this.authService.register(this.email, this.password).subscribe({
      next: (res) => {
        console.log('Registration successful:', res);
        this.router.navigate(['/login']); // <- go to login page
      },
      error: (err) => {
        this.error = err.error.message || 'Registration failed';
      },
    });
  }
}
