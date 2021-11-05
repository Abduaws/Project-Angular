import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PageServiceService } from '../page-service.service';

@Component({
  selector: 'app-useraccount',
  templateUrl: './useraccount.component.html',
  styleUrls: ['./useraccount.component.css']
})
export class UseraccountComponent{
  hideb = false;
  name = "";
  pass = "";
  constructor(public __pageService: PageServiceService) { 
    this.hideb=!PageServiceService.loggedin
    this.name=PageServiceService.current_account[0];
    this.pass=PageServiceService.current_account[1];
  }
  
}
