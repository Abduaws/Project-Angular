import { Component, OnInit } from '@angular/core';
import { PageServiceService } from '../page-service.service';

@Component({
  selector: 'app-reminder',
  templateUrl: './reminder.component.html',
  styleUrls: ['./reminder.component.css']
})
export class ReminderComponent implements OnInit {
  hideb = false;
  tasks:string[][] = [];
  startindex = 0;
  constructor(public __pageService: PageServiceService) { 
    this.hideb=!PageServiceService.loggedin
    this.tasks = PageServiceService.ongoing_task_list;
    this.startindex = (this.tasks.length-3)
  }

  ngOnInit(): void {
  }

  presstask(index:number){
    PageServiceService.current_task=this.tasks[index];
  }
}
