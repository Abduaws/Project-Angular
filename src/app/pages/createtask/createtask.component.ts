import { Component, OnInit } from '@angular/core';
import { PageServiceService } from '../page-service.service';

@Component({
  selector: 'app-createtask',
  templateUrl: './createtask.component.html',
  styleUrls: ['./createtask.component.css']
})
export class CreatetaskComponent implements OnInit {

  constructor(public __pageService: PageServiceService) { }

  ngOnInit(): void {
  }

  addtask(name:string,date:string,disc:string){
    PageServiceService.task_list.splice(0,0,[name,date,disc]);
    PageServiceService.ongoing_task_list.splice(0,0,[name,date,disc]);
    console.log(PageServiceService.task_list);
  }

}
