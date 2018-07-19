package com.tt.project.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.time.LocalDateTime;


@Entity
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Task extends AbstractEntity {


    private String toDo;
    private LocalDateTime deadline;

    @ManyToOne
    private Employee employee;

    public Task() {
    }


    public Task(String toDo, LocalDateTime deadline, Employee employee) {
        this.toDo = toDo;
        this.deadline = deadline;
        this.employee = employee;
    }

    public LocalDateTime getDeadline() {
        return deadline;
    }

    public void setDeadline(LocalDateTime deadline) {
        this.deadline = deadline;
    }


    public String getToDo() {
        return toDo;
    }

    public void setToDo(String toDo) {
        this.toDo = toDo;
    }

    public Employee getEmployee() {
        return employee;
    }

    public void setEmployee(Employee employee) {
        this.employee = employee;
    }

    @Override
    public String toString() {
        return "Task{" +
                "toDo='" + toDo + '\'' +
                ", deadline=" + deadline +
                ", employee=" + employee +
                '}';
    }
}
