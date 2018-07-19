package com.tt.project.repository;

import com.tt.project.model.Task;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface TasksRepository extends AbstractRepository<Task> {
    List<Task> findByEmployeeId(Long id);
}
