import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';
import { Task } from '../models/task';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {

  taskList : Task; 

  constructor(private taskService: TaskService) { }


  getData() {
    this.taskService.getAllTasks().subscribe(data => {
      this.taskList = data;
      console.log(this.taskList)
    });
  }


  ngOnInit() {
    this.getData();
  }

}
