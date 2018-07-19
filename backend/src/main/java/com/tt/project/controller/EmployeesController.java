package com.tt.project.controller;

import com.tt.project.model.Employee;
import com.tt.project.model.Task;
import com.tt.project.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/employee")
public class EmployeesController extends AbstractController<Employee>
{

    @Autowired
    private EmployeeService employeeService;


    @GetMapping("/{id}/tasks")
    public List<Task> employeesTasks(@PathVariable Long id) {
        return employeeService.employeesTasks(id);
    }


}


