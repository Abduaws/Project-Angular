import { Component, OnInit } from '@angular/core';
import { PageServiceService } from '../page-service.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  hideb = false;
  class="btn btn-outline-primary";
  tasks:string[][] = [];
  startindex = 0;
  tempindex = 0;
  hide = false;
  constructor(public __pageService: PageServiceService) { 
    this.hideb=!PageServiceService.loggedin
    this.tasks = PageServiceService.ongoing_task_list;
    this.startindex = Math.floor(Math.random()*(this.tasks.length-5))
    this.tempindex=this.startindex;
  }

  ngOnInit(): void {
  }

  presstask(index:number){
    PageServiceService.current_task=this.tasks[index];
  }

  presssearch(name:string){
    if(this.hide){
      return 0;
    }
    let check = false;
    let index = 0;
    for(let i=0;i<PageServiceService.ongoing_task_list.length;i++){
      if(PageServiceService.ongoing_task_list[i][0].toLowerCase()==name.toLowerCase()){
        check = true;
        index=i;
      }
    }
    if(check){
      this.hide = !this.hide;
      this.startindex=index;
    }
    if(!check && this.hide){
      this.hide=!this.hide;
      this.startindex=this.tempindex;
    }
    return 0;
  }

  enterinfo(info:string){
    let check = false;
    let index = 0;
    for(let i=0;i<PageServiceService.ongoing_task_list.length;i++){
      if(PageServiceService.ongoing_task_list[i][0].toLowerCase()==info.toLowerCase()){
        check = true;
        index=i;
        break
      }
    }
    if(check){
      this.hide = !this.hide;
      this.startindex=index;
      this.class="btn btn-outline-primary ";
    }
    if(!check && this.hide){
      this.hide=!this.hide;
      this.startindex=this.tempindex;
      this.class="btn btn-outline-primary";
    }
  }
}
