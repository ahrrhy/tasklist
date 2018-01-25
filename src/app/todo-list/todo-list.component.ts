import { Component, OnInit, Input } from '@angular/core';
import { Task, State } from './task/taskinterface';
import { Tasklist } from '../model/tasklist';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  taskList = new Tasklist();
  @Input() task: Task;
  tasks: Array<Task>;
  constructor() {
    this.tasks = this.taskList.tasks;
  }
  ngOnInit() {
  }
  changeStatus(task) {
    if (task.state !== State.DECLINED) {
      task.state += 1;
      if (task.state === State.DECLINED) {
        task.state = 0;
      }
    }
  }

}
