import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
import { TaskService } from 'src/app/task.service';
import { Task } from 'src/app/models/task.model';
import { ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss'],
})
export class NewTaskComponent implements OnInit {
  //below injecting task service into constructor as we do always
  constructor( private taskService: TaskService, private route: ActivatedRoute,private router:Router) {}

  listId: string;

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.listId = params['listId'];
    });
  }

  createTask(title: string) {
    this.taskService
      .createTask(title, this.listId)
      .subscribe((newTask: Task) => {
        this.router.navigate(['../'], { relativeTo: this.route });
      });
  }
}
