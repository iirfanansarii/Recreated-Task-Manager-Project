import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/task.service';
import { Router } from '@angular/router';
import { List } from 'src/app/models/list.model';

@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.scss'],
})
export class NewListComponent implements OnInit {

  //In constructor we inject taskService or service as you can seen below

  constructor(private taskService: TaskService, private router: Router) {}
  ngOnInit() {}

  //below we have repalced any with model List which you can see in previous lesson
  createList(title: string) {
    this.taskService.createList(title).subscribe((list: List) => {
      console.log(list);
      // Now we navigate to /lists/task._id
      this.router.navigate(['/lists', list._id]);
    });
  }
}
