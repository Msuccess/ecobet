import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationComponent } from './authentication.component';
import { LoginComponent } from './partials/login/login.component';
import { RegistrationComponent } from './partials/registration/registration.component';
import { NgbModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlatpickrModule } from 'angularx-flatpickr';

@NgModule({
  declarations: [
    AuthenticationComponent,
    LoginComponent,
    RegistrationComponent,
  ],
  imports: [
    CommonModule,
    NgbNavModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    FlatpickrModule.forRoot(),
  ],
  entryComponents: [AuthenticationComponent],
})
export class AuthenticationModule {}
