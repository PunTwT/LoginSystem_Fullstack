import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:3001/api/auth';
  constructor(private http: HttpClient) { }

  register(email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, { email, password });
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, { email, password });
  }

  getProfile(): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http.get(`${this.apiUrl}/profile`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  }

  logout(): void {
    localStorage.removeItem('token');
  }
}
