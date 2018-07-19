package com.tt.project.servicesImpl;

import com.tt.project.model.Employee;
import com.tt.project.model.Task;
import com.tt.project.repository.TasksRepository;
import com.tt.project.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeServiceImpl extends AbstractServiceImpl<Employee> implements EmployeeService  {

    @Autowired
    private TasksRepository tasksRepository;

    @Override
    public List<Task> employeesTasks(Long id) {
        return tasksRepository.findByEmployeeId(id);
    }

}
