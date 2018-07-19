package com.tt.project.controller;

import com.tt.project.model.Task;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/task")
@CrossOrigin(origins = "http://localhost:4200")
public class TasksController extends AbstractController<Task>
{

}