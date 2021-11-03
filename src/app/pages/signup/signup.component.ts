import { Component, OnInit } from '@angular/core';
import { animationFrameScheduler, range } from 'rxjs';
import { PageServiceService } from '../page-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(public __pageService: PageServiceService) { }

  ngOnInit(): void {
  }
  
}
