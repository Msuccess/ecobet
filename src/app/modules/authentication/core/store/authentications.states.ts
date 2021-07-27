import { Injectable } from '@angular/core';
import { Navigate } from '@ngxs/router-plugin';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { ErrorService } from 'src/app/core/service/error.service';
import { UserModel } from '../models/authentication.model';
import { AuthenticationService } from '../services/authentication.service';
import {
  ClearAuthenticationErrors,
  CurrentUser,
  Login,
  Register,
  SignOut,
} from './authentication.action';

export interface AuthenticationStateModel {
  token: string;
  user: UserModel;
  errors: Array<string>;
  companyId: string;
}

@State<AuthenticationStateModel>({
  name: 'auth',
  defaults: {
    token: '',
    errors: Array<string>(),
    user: {} as UserModel,
    companyId: '',
  },
})
@Injectable()
export class AuthenticationState {
  constructor(
    private authService: AuthenticationService,
    private errorService: ErrorService
  ) {}

  /* >>>>>>>>>>>>>>>>>>>Selectors<<<<<<<<<<<<<<<<<<<< */
  @Selector()
  static token(state: AuthenticationStateModel): string {
    return state.token;
  }

  @Selector()
  static isAuthenticated(state: AuthenticationStateModel): boolean {
    return !!state.token;
  }

  @Selector()
  static user(state: AuthenticationStateModel): UserModel {
    return state.user;
  }

  @Selector()
  static errors(state: AuthenticationStateModel): Array<string> {
    return state.errors;
  }

  @Selector()
  static tokenExpired(state: AuthenticationStateModel): boolean {
    const base64Url = state.token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const decodedToken = JSON.parse(window.atob(base64));
    return Date.now() >= decodedToken.exp * 1000;
  }

  /* >>>>>>>>>>>>>>>>>>>Actions<<<<<<<<<<<<<<<<<<<< */
  @Action(Login)
  signin(
    context: StateContext<AuthenticationStateModel>,
    action: Login
  ): Observable<any> {
    const title = 'Sign In';
    return this.authService.signin(action.payload).pipe(
      tap((response: any) => {
        context.patchState({
          token: response.data.token.accessToken,
          user: response.data.user,
        });
        context.dispatch(new Navigate(['home']));
      }),
      catchError((err) => this.errorService.handleCatchError(err, title))
    );
  }

  @Action(CurrentUser)
  currentUser(
    context: StateContext<AuthenticationStateModel>,
    action: CurrentUser
  ): Observable<any> {
    const title = 'CurrentUser';
    return this.authService.getCurrentUser().pipe(
      tap((response: any) => {
        context.patchState({ user: response.data } as AuthenticationStateModel);
      }),
      catchError((err) => this.errorService.handleCatchError(err, title))
    );
  }

  @Action(Register)
  signUp(
    context: StateContext<AuthenticationStateModel>,
    action: Register
  ): Observable<any> {
    const title = 'Registration';
    return this.authService.signup(action.payload).pipe(
      tap((response: any) => {
        context.dispatch(
          new Navigate(['/accounts/verify-email'], {
            email: action.payload.email,
          })
        );
      }),
      catchError((err) => this.errorService.handleCatchError(err, title))
    );
  }

  @Action(SignOut)
  signOut(context: StateContext<AuthenticationStateModel>): void {
    context.setState({
      token: '',
      user: {} as UserModel,
      errors: Array<string>(),
    } as AuthenticationStateModel);
    context.dispatch(new Navigate(['/accounts/signin']));
    sessionStorage.clear();
    localStorage.clear();
  }

  @Action(ClearAuthenticationErrors)
  clearLoginErrors(context: StateContext<AuthenticationStateModel>): void {
    context.patchState({ errors: Array<string>() });
  }
}
