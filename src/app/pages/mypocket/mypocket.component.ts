import { Component, OnInit } from '@angular/core';
import { PageServiceService } from '../page-service.service';

@Component({
  selector: 'app-mypocket',
  templateUrl: './mypocket.component.html',
  styleUrls: ['./mypocket.component.css']
})
export class MypocketComponent implements OnInit {
  tasks:string[][] = [];
  startindex = 0;
  constructor(public __pageService: PageServiceService) { 
    this.tasks = PageServiceService.completed_task_list;
    this.startindex = Math.floor(Math.random()*(this.tasks.length-5))
  }

  ngOnInit(): void {
  }

  presstask(index:number){
    PageServiceService.current_task=this.tasks[index];
  }
}
