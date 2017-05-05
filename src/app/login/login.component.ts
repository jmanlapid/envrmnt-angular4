import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Auth } from '../shared/auth.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [
    Auth
  ],
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(
    private router: Router,
    private service: Auth
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')
    });
  }

  onSubmit(values) {
    if (this.service.logIn(values.username, values.password)) {
      this.router.navigate(['/dashboard']);
    } else {
      console.log('login failed, game over man game over!!!!');
    }
  }
}
