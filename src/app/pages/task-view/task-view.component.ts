import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss'],
})
export class TaskViewComponent implements OnInit {
  //injecting task service
  constructor( private taskService: TaskService) {}

  ngOnInit() {}
  // after injecting task service creating method
  createNewList() {
    this.taskService.createList('Testing').subscribe((response: any) => {
      console.log(response);
   });
  }
}
