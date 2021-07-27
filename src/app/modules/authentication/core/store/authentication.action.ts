import { LoginModel, RegistrationModel } from '../models/authentication.model';

export class ClearAuthenticationErrors {
  static readonly type = '[AUTHENTICATION] Clear Signin Errors';
}

export class Login {
  static readonly type = '[AUTHENTICATION] Sign in';
  constructor(public payload: LoginModel) {}
}

export class Register {
  static readonly type = '[AUTHENTICATION] Sign up';
  constructor(public payload: RegistrationModel) {}
}

export class SignOut {
  static readonly type = '[AUTHENTICATION] Sign out';
}

export class CurrentUser {
  static readonly type = '[AUTHENTICATION] Current User';
}
