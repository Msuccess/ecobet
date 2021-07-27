import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {
  actionsExecuting,
  ActionsExecuting,
} from '@ngxs-labs/actions-executing';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Login } from '../../core/store/authentication.action';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup | any;
  submitted = false;

  @Select(actionsExecuting([Login]))
  loading$: Observable<ActionsExecuting> | any;

  constructor(private formBuilder: FormBuilder, private store: Store) {}

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
    this.store.dispatch(new Login(this.loginForm.value)).subscribe();
  }

  get formControl(): any {
    return this.loginForm.controls;
  }
}
