import { Injectable } from '@angular/core';
import { HttpParams, HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from '../models/user.model';
import { BehaviorSubject, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }
  
  user = new BehaviorSubject<User>(null);
  apiUrl = 'https://game-tracker-server.herokuapp.com'

  signIn(username: string, password: string) {
    const url = `${this.apiUrl}/api/login`;
    // let params = new HttpParams();
    // params = params.append('username', username);
    // params = params.append('password', password);
    const data = {'username': username, 'password': password}

    const options = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };

    return this.http
      .post<User>(url, data, options)
      .pipe(
        catchError(this.handleError),
        tap(user => {
            this.user.next(user);
            localStorage.setItem('userData', JSON.stringify(user));
        })
      );
  }

  signUp(username: string, password: string) {
    const url = `${this.apiUrl}/api/signup`;
    const data = {'username': username, 'password': password}
    const options = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };

    return this.http
      .post<string>(url, data, options)
      .pipe(
        catchError(this.handleError),
        tap(response => {
          return response;
        })
      );
  }

  autoLogin() {
    const userData = JSON.parse(localStorage.getItem('userData'));
    if (!userData) {
      return;
    }

    const loadedUser = new User(
      userData.token,
      userData.userName
    );

    this.user.next(loadedUser);
  }

  logout() {
    this.user.next(null);
    this.router.navigate(['/login']);
    localStorage.removeItem('userData');
  }

  private handleError(errorRes: HttpErrorResponse) {
    return throwError(errorRes.error);
  }
}
