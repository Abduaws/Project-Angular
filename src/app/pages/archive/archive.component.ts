import { Component, OnInit } from '@angular/core';
import { PageServiceService } from '../page-service.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {
  tasks:string[][] = [];
  startindex = 0;
  constructor(public __pageService: PageServiceService) { 
    this.tasks = PageServiceService.task_list;
    this.startindex = Math.floor(Math.random()*(this.tasks.length-5))
  }

  ngOnInit(): void {
  }

}
