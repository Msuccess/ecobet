import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthEndPoints } from 'src/app/core/endpoints/auth.endpoints';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  endpoint: AuthEndPoints;
  constructor(public httpClient: HttpClient) {
    this.endpoint = new AuthEndPoints();
  }

  public signin(data: any): Observable<any> {
    return this.httpClient
      .post(this.endpoint.API_AUTH_LOGIN, data)
      .pipe(catchError((err) => throwError(err)));
  }

  public signup(data: any): Observable<any> {
    return this.httpClient
      .post(this.endpoint.API_AUTH_REGISTER, data)
      .pipe(catchError((err) => throwError(err)));
  }

  public resetPassword(data: any): Observable<any> {
    return this.httpClient
      .post(this.endpoint.API_AUTH_RESET_PASSWORD, data)
      .pipe(catchError((err) => throwError(err)));
  }

  public forgotPassword(data: any): Observable<any> {
    return this.httpClient
      .post(this.endpoint.API_AUTH_FORGOT_PASSWORD, data)
      .pipe(catchError((err) => throwError(err)));
  }

  public verifyEmail(data: any): Observable<any> {
    return this.httpClient
      .post(this.endpoint.API_AUTH_VERIFY_EMAIL, data)
      .pipe(catchError((err) => throwError(err)));
  }

  public resendEmail(data: any): Observable<any> {
    return this.httpClient
      .post(this.endpoint.API_AUTH_RESEND_EMAIL, data)
      .pipe(catchError((err) => throwError(err)));
  }

  public getCurrentUser(): Observable<any> {
    return this.httpClient
      .get(this.endpoint.API_AUTH_ME)
      .pipe(catchError((err) => throwError(err)));
  }
}
