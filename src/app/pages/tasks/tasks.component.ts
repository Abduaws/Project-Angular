import { Component, OnInit } from '@angular/core';
import { PageServiceService } from '../page-service.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks:string[] = [];
  startindex = 0;
  constructor(public __pageService: PageServiceService) { 
    this.tasks = __pageService.ongoing_task_list;
    this.startindex = Math.floor(Math.random()*(this.tasks.length-5))
  }

  ngOnInit(): void {
  }

}
