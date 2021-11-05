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

  logout(){
    PageServiceService.loggedin=false;
  }

  delete(){
    PageServiceService.loggedin=false;
    for(let i=0;i<10000;i++){
      let localaccount = localStorage[i].split(",")
      if(localaccount.length==2 && PageServiceService.current_account[0]==localaccount[0]){
        localStorage.removeItem(String(i));
        console.log(localStorage)
      }
      if(localStorage[i+1]==undefined){
        break
      }
    }
  }
  
}
