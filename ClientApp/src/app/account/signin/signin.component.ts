import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

import { AccountService } from 'src/app/core/services/account.service';
import { SubSink } from 'subsink';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthSercie } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SignInComponent implements OnInit, OnDestroy {
  signInForm: FormGroup;

  username: FormControl;
  password: FormControl;

  subsink = new SubSink();

  constructor(
    private accountService: AccountService,
    private authService: AuthSercie,
    private router: Router,
    private snackBar: MatSnackBar,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.username = this.fb.control('', Validators.required);
    this.password = this.fb.control('', Validators.required);

    this.signInForm = this.fb.group({
      username: this.username,
      password: this.password,
    });
  }

  onFormSubmit(): void {
    if (this.signInForm.valid) {
      const username = this.username.value;
      const password = this.password.value;

      this.subsink.sink = this.accountService.signIn(username, password).subscribe((res) => {
        if (this.isResponseValid(res)) {
          this.snackBar.open('Invalid username or password', 'Got it');
        } else {
          this.authenticate(res);
          this.router.navigate(['home']);
        }
      });
    }
  }

  private isResponseValid(res: any): boolean {
    return !res || !res.token;
  }

  private authenticate(res): void {
    this.authService.authenticate(res.token);
  }

  ngOnDestroy(): void {
    this.subsink.unsubscribe();
  }
}
