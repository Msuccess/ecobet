import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  actionsExecuting,
  ActionsExecuting,
} from '@ngxs-labs/actions-executing';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Gender } from 'src/app/core/constants/gender';
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
  genders = ['Male', 'Female', 'Other'];

  @Select(actionsExecuting([Register]))
  loading$: Observable<ActionsExecuting> | any;

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
        dateOfBirth: ['', [Validators.required]],
        gender: ['', [Validators.required]],
        mobileNumber: ['', [Validators.required]],
        firstName: ['', [Validators.required]],
        lastName: ['', [Validators.required]],
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

    this.registrationForm.value.dateOfBirth = this.getDate(
      this.registrationForm.value.dateOfBirth
    );
    console.log('>>>>>>>>>>>>>>>>>', this.registrationForm.value);
    this.store.dispatch(new Register(this.registrationForm.value)).subscribe();
  }

  getDate(date: any) {
    return new Date(date.year, date.month - 1, date.day);
  }

  get formControl(): any {
    return this.registrationForm.controls;
  }
}
