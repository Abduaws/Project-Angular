import { Component, OnInit } from '@angular/core';
import { animationFrameScheduler, range } from 'rxjs';
import { PageServiceService } from '../page-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(public __pageService: PageServiceService) {
    console.log(localStorage);
   }

  ngOnInit(): void {
  }
  
  onregister(name:string,pass:string){
    for(let i =0;i<10000;i++){
      if(localStorage[i]==undefined){
        localStorage.setItem(String(i),name+","+pass)
        break
      }
    }
    console.log(localStorage);
  }

}
