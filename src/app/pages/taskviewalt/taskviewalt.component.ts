import { Component, OnInit } from '@angular/core';
import { PageServiceService } from '../page-service.service';

@Component({
  selector: 'app-taskviewalt',
  templateUrl: './taskviewalt.component.html',
  styleUrls: ['./taskviewalt.component.css']
})
export class TaskviewaltComponent implements OnInit {
  name = PageServiceService.current_task[0];
  date = PageServiceService.current_task[1];
  disc = PageServiceService.current_task[2];

  constructor(public __pageService: PageServiceService) { }

  ngOnInit(): void {
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
