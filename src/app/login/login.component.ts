import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserAuthService } from '../shared/user-auth.service'

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  providers: [ UserAuthService ],
  // styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(public service: UserAuthService) { }

  ngOnInit() {
    this.form = new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')
    })
  }


  onSubmit(values) {
    console.log(this.service.logIn(values.username, values.password))
  }
}
