import { Component, OnInit } from '@angular/core';
import { PageServiceService } from '../page-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  hideb = false;

  constructor(public __pageService: PageServiceService) { 
    this.hideb=!PageServiceService.loggedin
  }

  ngOnInit(): void {
    
  }

}
