import { Injectable } from '@angular/core';
import { Registers } from '../register/register-interface';

@Injectable({
  providedIn: 'root'
})
export class HomePageService {

  private userData: Registers | undefined;

  setUserData(data: Registers) {
    this.userData = data;
  }

  getUserData(): Registers | undefined {
    return this.userData;
  }

  constructor() { }
}
