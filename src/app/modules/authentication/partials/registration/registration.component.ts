import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmPasswordValidator } from 'src/app/core/validators/confirmpassword.validator';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  registrationForm: FormGroup | any;
  submitted = false;
  user: any;

  // @Select(actionsExecuting([UpdateProfile]))
  // loading$: Observable<ActionsExecuting>;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    this.registrationForm = this.formBuilder.group(
      {
        email: [
          '',
          [Validators.compose([Validators.required, Validators.email])],
        ],
        password: ['', [Validators.compose([Validators.required])]],
        confirm_password: ['', [Validators.required]],
      },
      {
        validator: ConfirmPasswordValidator('password', 'confirm_password'),
      }
    );
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.registrationForm.invalid) {
      return;
    }
    /* Dispatch Action Here */
  }

  get formControl(): any {
    return this.registrationForm.controls;
  }
}
