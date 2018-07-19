package com.tt.project.service;


import com.tt.project.model.AbstractEntity;

import java.util.List;

public interface AbstractService<T extends AbstractEntity> {


    List<T> getAll();

    T getOne(Long id);

    T add(T object);

    T update(T object);

    void delete(Long id);

}
