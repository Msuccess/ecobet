import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ConfirmPasswordValidator } from 'src/app/core/validators/confirmpassword.validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup | any;
  submitted = false;
  user: any;

  // @Select(actionsExecuting([UpdateProfile]))
  // loading$: Observable<ActionsExecuting>;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    this.loginForm = this.formBuilder.group({
      email: [
        '',
        [Validators.compose([Validators.required, Validators.email])],
      ],
      password: ['', [Validators.compose([Validators.required])]],
    });
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    /* Dispatch Action Here */
  }

  get formControl(): any {
    return this.loginForm.controls;
  }
}
