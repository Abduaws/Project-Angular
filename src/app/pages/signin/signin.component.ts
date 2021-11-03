import { Component, OnInit } from '@angular/core';
import { PageServiceService } from '../page-service.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

    constructor (public __pageService: PageServiceService) { }

}

export class Account{
  static usernames:string[] = [];
  static passwords:string[] = [];
  constructor(usernname:string, password:string){
    Account.usernames.push(usernname);
    Account.passwords.push(password);
  }

}


