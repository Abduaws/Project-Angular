import { Component, OnInit } from '@angular/core';
import { PageServiceService } from '../page-service.service';

@Component({
  selector: 'app-mypocket',
  templateUrl: './mypocket.component.html',
  styleUrls: ['./mypocket.component.css']
})
export class MypocketComponent implements OnInit {
  class="btn btn-outline-success";
  tasks:string[][] = [];
  startindex = 0;
  hide = false;
  tempindex = 0;
  constructor(public __pageService: PageServiceService) { 
    this.tasks = PageServiceService.completed_task_list;
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
    for(let i=0;i<PageServiceService.completed_task_list.length;i++){
      if(PageServiceService.completed_task_list[i][0].toLowerCase()==name.toLowerCase()){
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
    for(let i=0;i<PageServiceService.completed_task_list.length;i++){
      if(PageServiceService.completed_task_list[i][0].toLowerCase()==info.toLowerCase()){
        check = true;
        index=i;
      }
    }
    if(check){
      this.hide = !this.hide;
      this.startindex=index;
      this.class="btn btn-outline-success nice";
    }
    if(!check && this.hide){
      this.hide=!this.hide;
      this.startindex=this.tempindex;
      this.class="btn btn-outline-success";
    }
  }
}
