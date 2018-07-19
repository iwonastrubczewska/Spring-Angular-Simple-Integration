import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from '../services/task.service';
import { Task } from '../models/task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
@Input() task: Task;
@Output() reloadList = new EventEmitter<string>();

  constructor(private service: TaskService , private router: Router) { }

  ngOnInit() {
  }

  delete(id){
    this.service.deleteTask(id).subscribe(data => {            
      this.reloadList.emit();
    });


    

}

}
