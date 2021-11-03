import { Component, OnInit } from '@angular/core';
import { PageServiceService } from '../page-service.service';

@Component({
  selector: 'app-reminder',
  templateUrl: './reminder.component.html',
  styleUrls: ['./reminder.component.css']
})
export class ReminderComponent implements OnInit {
  tasks:string[][] = [];
  startindex = 0;
  constructor(public __pageService: PageServiceService) { 
    this.tasks = PageServiceService.ongoing_task_list;
    this.startindex = (this.tasks.length-3)
  }

  ngOnInit(): void {
  }

}
