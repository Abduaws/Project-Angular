import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PageServiceService } from '../page-service.service';

@Component({
  selector: 'app-useraccount',
  templateUrl: './useraccount.component.html',
  styleUrls: ['./useraccount.component.css']
})
export class UseraccountComponent{

  constructor(public __pageService: PageServiceService) { }
  
}
