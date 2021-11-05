import { Component, OnInit } from '@angular/core';
import { PageServiceService } from '../page-service.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {
  class="btn btn-outline-secondary";
  tasks:string[][] = [];
  startindex = 0;
  hide = false;
  tempindex = 0;
  hideb = false;
  constructor(public __pageService: PageServiceService) { 
    this.hideb=!PageServiceService.loggedin
    this.tasks = PageServiceService.task_list;
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
    for(let i=0;i<PageServiceService.task_list.length;i++){
      if(PageServiceService.task_list[i][0].toLowerCase()==name.toLowerCase()){
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
    for(let i=0;i<PageServiceService.task_list.length;i++){
      if(PageServiceService.task_list[i][0].toLowerCase()==info.toLowerCase()){
        check = true;
        index=i;
      }
    }
    if(check){
      this.hide = !this.hide;
      this.startindex=index;
      this.class="btn btn-outline-secondary nice";
    }
    if(!check && this.hide){
      this.hide=!this.hide;
      this.startindex=this.tempindex;
      this.class="btn btn-outline-secondary";
    }
  }
}
