import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.css']
})
export class UpdateTaskComponent implements OnInit {
  task = {};
  constructor(private service: TaskService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    console.log("test");
    this.getTask(this.route.snapshot.params['id']);
  }

  getTask(id: number){
    console.log(id);
    this.service.getTask(id).subscribe(data => { 
      console.log(data);
      this.task = data;
    });
  }

  update(id, data){
    this.service.update(data).subscribe(result => {
      let id = result['id'];
      this.router.navigate(['task/all']);
    })
  }

}
