import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PageServiceService {
  task_list = [
    "Do Chores",
    "Cook Food",
    "Study",
    "Take dog for a walk",
    "Go to sleep",
    "Play",
    "Program",
    "Solve assignment",
    "Eat food",
    "Kill yourself"
  ];
  completed_task_list = [
    "Do Chores",
    "Cook Food",
    "Study",
    "Take dog for a walk",
    "Go to sleep",
    "Play",
    "Program",
    "Solve assignment",
    "Eat food",
    "Kill yourself"
  ];
  ongoing_task_list = [
    "Do Chores",
    "Cook Food",
    "Study",
    "Take dog for a walk",
    "Go to sleep",
    "Play",
    "Program",
    "Solve assignment",
    "Eat food",
    "Kill yourself"
  ];
  constructor() { }
}
