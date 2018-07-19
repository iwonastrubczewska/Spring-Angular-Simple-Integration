package com.tt.project.service;

import com.tt.project.model.Employee;
import com.tt.project.model.Task;

import java.util.List;

public interface EmployeeService extends AbstractService<Employee>{

    List<Task> employeesTasks(Long id);

}
