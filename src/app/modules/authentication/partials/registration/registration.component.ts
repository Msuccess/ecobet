import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';
import { ConfirmPasswordValidator } from 'src/app/core/validators/confirm_password.validator';
import { Register } from '../../core/store/authentication.action';

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

  constructor(private formBuilder: FormBuilder, private store: Store) {}

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
    this.store.dispatch(new Register(this.registrationForm.value)).subscribe();
  }

  get formControl(): any {
    return this.registrationForm.controls;
  }
}
