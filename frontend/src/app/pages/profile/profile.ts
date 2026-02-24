import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile implements OnInit {
  user: any = null;

  constructor(private authService: AuthService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.authService.getProfile().subscribe({
      next: (res: any) => {
        console.log('User profile:', res);
        this.user = res.user; // <- set user data
        this.cdr.detectChanges(); // <- trigger change detection to update view
      },
      error: (err) => {
        console.error('Error fetching user:', err);
      },
    })
  }
}
