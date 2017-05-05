import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from './shared/auth.service';

import '../style/app.scss';

@Component({
  selector: 'my-app', // <my-app></my-app>
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ Auth ]
})

export class AppComponent {
  url = 'https://github.com/preboot/angular2-webpack';
  title: string;

  constructor(
    private auth: Auth,
    private router: Router
  ) { }

  logIn() {
    this.router.navigate(['/login'], { skipLocationChange: true });
  }

  logOut() {
    this.auth.logOut();
    this.router.navigate(['']);
  }
}
