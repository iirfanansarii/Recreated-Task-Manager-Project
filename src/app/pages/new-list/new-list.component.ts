import { createHostListener } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { title } from 'process';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.scss'],
})
export class NewListComponent implements OnInit {
  constructor(private taskService: TaskService) {}

  ngOnInit() {}

  createList(title: string) {
    this.taskService.createList(title).subscribe((response: any) => {
      console.log(response);
    });
  }
}
