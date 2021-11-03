import { Component, OnInit } from '@angular/core';
import { PageServiceService } from '../page-service.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
    goodtogo="";
    constructor (public __pageService: PageServiceService) { }
    checkinfo(username:string,password:string){
      if(username=="Abduaws" && password=="19p6458"){
        this.goodtogo="/dashboard";
      }
    }
} 