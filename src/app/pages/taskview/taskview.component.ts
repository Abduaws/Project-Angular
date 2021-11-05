import { Component, OnInit } from '@angular/core';
import { PageServiceService } from '../page-service.service';

@Component({
  selector: 'app-taskview',
  templateUrl: './taskview.component.html',
  styleUrls: ['./taskview.component.css']
})
export class TaskviewComponent implements OnInit {
  hideb = false;
  name = PageServiceService.current_task[0];
  date = PageServiceService.current_task[1];
  disc = PageServiceService.current_task[2];

  constructor(public __pageService: PageServiceService) {
    this.hideb=!PageServiceService.loggedin
   }

  ngOnInit(): void {
  }

  completetask(){
    for(let i =0;i<PageServiceService.ongoing_task_list.length;i++){
      if(PageServiceService.ongoing_task_list[i][0]==PageServiceService.current_task[0]){
        PageServiceService.ongoing_task_list.splice(i,1);
        PageServiceService.completed_task_list.splice(0,0,PageServiceService.current_task);
      }
    }
  }

  deletetask(){
    for(let i =0;i<PageServiceService.ongoing_task_list.length;i++){
      if(PageServiceService.ongoing_task_list[i][0]==PageServiceService.current_task[0]){
        PageServiceService.ongoing_task_list.splice(i,1);
      }
    }
    for(let i =0;i<PageServiceService.task_list.length;i++){
      if(PageServiceService.task_list[i][0]==PageServiceService.current_task[0]){
        PageServiceService.task_list.splice(i,1);
      }
    }
    for(let i =0;i<PageServiceService.completed_task_list.length;i++){
      if(PageServiceService.completed_task_list[i][0]==PageServiceService.current_task[0]){
        PageServiceService.completed_task_list.splice(i,1);
      }
    }
  }

}
