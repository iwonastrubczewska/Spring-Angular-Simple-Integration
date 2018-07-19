package com.tt.project.controller;


import com.tt.project.model.AbstractEntity;
import com.tt.project.service.AbstractService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import java.util.List;


@RestController
@CrossOrigin(origins = "http://localhost:4200")
public abstract class AbstractController<T extends AbstractEntity> {

    @Autowired
    private AbstractService<T> abstractService;

    @GetMapping
    public List<T> getAll() {
        return abstractService.getAll();
    }

    @GetMapping("/{id}")
    public T getOne(@PathVariable Long id) {
        return abstractService.getOne(id);
    }

    @PostMapping
    public T add(@RequestBody T object) {
        return abstractService.add(object);
    }

    @PutMapping
    public T update(@RequestBody T object) {
        return abstractService.update(object);
    }

    @DeleteMapping("/{id}")
    void delete(@PathVariable Long id) {
        abstractService.delete(id);
    }


}