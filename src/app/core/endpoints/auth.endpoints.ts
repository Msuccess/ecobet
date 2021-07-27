import { environment } from 'src/environments/environment';

export class AuthEndPoints {
  API_AUTH_BASE = environment.baseUrl + 'auth/';
  API_AUTH_ME = this.API_AUTH_BASE + 'me';
  API_AUTH_LOGIN = this.API_AUTH_BASE + 'login';
  API_AUTH_REGISTER = this.API_AUTH_BASE + 'register';
  API_AUTH_RESET_PASSWORD = this.API_AUTH_BASE + 'password/reset';
  API_AUTH_FORGOT_PASSWORD = this.API_AUTH_BASE + 'password/forgot';
  API_AUTH_VERIFY_EMAIL = this.API_AUTH_BASE + 'verify/email';
  API_AUTH_RESEND_EMAIL = this.API_AUTH_BASE + 'verify/email/resend';
}
