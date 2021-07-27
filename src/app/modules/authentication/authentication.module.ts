import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationComponent } from './authentication.component';
import { LoginComponent } from './partials/login/login.component';
import { RegistrationComponent } from './partials/registration/registration.component';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AuthenticationComponent,
    LoginComponent,
    RegistrationComponent,
  ],
  imports: [CommonModule, NgbNavModule, ReactiveFormsModule, FormsModule],
  entryComponents: [AuthenticationComponent],
})
export class AuthenticationModule {}
