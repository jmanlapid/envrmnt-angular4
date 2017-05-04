import { Injectable } from '@angular/core';
import { USERS } from './mock-users';

@Injectable()
export class Auth {
  public username: string;

  constructor() {
    this.isLoggedIn = this.isLoggedIn.bind(this);

    if (this.isLoggedIn()) {
      this.username = localStorage.getItem('USERNAME');
    }
  }

  isLoggedIn() {
    return typeof localStorage.getItem('USERNAME') === 'string';
  }

  logIn(username: string, password: string) {
    if (USERS[username] === password) {
      localStorage.setItem('USERNAME', username);
      this.username = username;
      return true;
    }
    return false;
  }

  logOut() {
    localStorage.removeItem('USERNAME');
    this.username = null;
  }
}
