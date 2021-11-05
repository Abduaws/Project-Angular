import { Component, OnInit } from '@angular/core';
import { PageServiceService } from '../page-service.service';

@Component({
  selector: 'app-createtask',
  templateUrl: './createtask.component.html',
  styleUrls: ['./createtask.component.css']
})
export class CreatetaskComponent implements OnInit {
  hideb = false;
  constructor(public __pageService: PageServiceService) {
    this.hideb=!PageServiceService.loggedin
   }

  ngOnInit(): void {
  }

  addtask(name:string,date:string,disc:string){
    PageServiceService.task_list.splice(0,0,[name,date,disc]);
    PageServiceService.ongoing_task_list.splice(0,0,[name,date,disc]);
    for(let i =0;i<10000;i++){
      if(localStorage[i]==undefined){
        localStorage.setItem(String(i),name+","+date+","+disc);
        console.log(localStorage)
        break
      }
    }
  }

}
