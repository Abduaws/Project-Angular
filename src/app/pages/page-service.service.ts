import { Injectable, Input } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PageServiceService {
  static current_task:string[] = [];
  static task_list = [
    ["Do Chores","01/01/2002","Default task"],
    ["Cook Food","01/01/2002","Default task"],
    ["Study","01/01/2002","Default task"],
    ["Take dog for a walk","01/01/2002","Default task"],
    ["Go to sleep","01/01/2002","Default task"],
    ["Play","01/01/2002","Default task"],
    ["Program","01/01/2002","Default task"],
    ["Solve assignment","01/01/2002","Default task"],
    ["Eat food","01/01/2002","Default task"],
    ["Kill yourself","01/01/2002","Default task"]
  ];
  static completed_task_list = [
    ["Do Chores","01/01/2002","Default task"],
    ["Cook Food","01/01/2002","Default task"],
    ["Study","01/01/2002","Default task"],
    ["Take dog for a walk","01/01/2002","Default task"],
    ["Go to sleep","01/01/2002","Default task"],
    ["Play","01/01/2002","Default task"],
    ["Program","01/01/2002","Default task"],
    ["Solve assignment","01/01/2002","Default task"],
    ["Eat food","01/01/2002","Default task"],
    ["Kill yourself","01/01/2002","Default task"]
  ];
  static ongoing_task_list = [
    ["Do Chores","01/01/2002","Default task"],
    ["Cook Food","01/01/2002","Default task"],
    ["Study","01/01/2002","Default task"],
    ["Take dog for a walk","01/01/2002","Default task"],
    ["Go to sleep","01/01/2002","Default task"],
    ["Play","01/01/2002","Default task"],
    ["Program","01/01/2002","Default task"],
    ["Solve assignment","01/01/2002","Default task"],
    ["Eat food","01/01/2002","Default task"],
    ["Kill yourself","01/01/2002","Default task"]
  ];
  constructor() { }
}
