import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PageServiceService {

  static current_account:string[] = [];

  static current_task:string[] = [];

  static task_list:string[][] = [];

  static completed_task_list:string[][] = [];

  static ongoing_task_list:string[][] = [];

  constructor(public http: HttpClient) { }
  
  getdata(){
    
  }
}
