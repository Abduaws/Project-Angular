import { Component, OnInit } from '@angular/core';
import { PageServiceService } from '../page-service.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit{
    goodtogo="";
    static alreadydone=false
    constructor (public __pageService: PageServiceService) { }
    
     ngOnInit(){
      // RUN ONLY ONCE TO INITIALIZE LOCAL DATABASE
      // for(let i =0;i<10000;i++){
      //     if(localStorage[i]==undefined){
      //       localStorage.setItem(String(i),"Do Chores,01/01/2002,Default task")
      //       localStorage.setItem(String(i+1),"Cook Food,01/01/2002,Default task")
      //       localStorage.setItem(String(i+2),"Study,01/01/2002,Default task")
      //       localStorage.setItem(String(i+3),"Take dog for a walk,01/01/2002,Default task")
      //       localStorage.setItem(String(i+4),"Go to sleep,01/01/2002,Default task")
      //       localStorage.setItem(String(i+5),"Play,01/01/2002,Default task")
      //       localStorage.setItem(String(i+6),"Program,01/01/2002,Default task")
      //       localStorage.setItem(String(i+7),"Solve assignment,01/01/2002,Default task")
      //       localStorage.setItem(String(i+8),"Eat food,01/01/2002,Default task")
      //       localStorage.setItem(String(i+9),"Kill yourself,01/01/2002,Default task")
      //       break
      //     }
      //   }
      console.log(localStorage)
      if(SigninComponent.alreadydone){
        return 0;
      }
      for(let i=0;i<10000;i++){
        let item:string = localStorage[i]
        let task:string[] = item.split(",");
        if(task.length==3){
          PageServiceService.task_list.push(task);
          PageServiceService.ongoing_task_list.push(task);
          PageServiceService.completed_task_list.push(task);
          if(localStorage[i+1]==undefined){
            break
          }
        }
      }
      SigninComponent.alreadydone=true
      return 0;
    }

    checkinfo(username:string,password:string){
      for(let i=0;i<10000;i++){
        let item:string = localStorage[i]
        let namepass:string[] = item.split(",");
        if(username==namepass[0] && password==namepass[1]){
          PageServiceService.current_account=namepass;
          this.goodtogo="/dashboard";
          PageServiceService.loggedin=true;
          break
        }
      }
    }
} 