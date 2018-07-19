package com.tt.project.servicesImpl;

import com.tt.project.model.AbstractEntity;
import com.tt.project.repository.AbstractRepository;
import com.tt.project.service.AbstractService;
import com.tt.project.exc.ObjectNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;


@Service
public abstract class AbstractServiceImpl<T extends AbstractEntity >implements AbstractService<T> {

    @Autowired
    private AbstractRepository<T> abstractRepository;

    @Override
    public List<T> getAll() {
        return abstractRepository.findAll();
    }

    @Override
    public T getOne(Long id) {
        T object = abstractRepository.getOne(id);
        if(object!=null)
            return object;
        else throw new ObjectNotFoundException("Object not found");
    }

    @Override
    public T add(T object) {
        return  abstractRepository.save(object);
    }

    @Override
    public T update(T object) {
        if (abstractRepository.findById(object.getId()).isPresent())
            return  abstractRepository.save(object);
        else throw new ObjectNotFoundException("Object not found");

    }

    @Override
    public void delete(Long id) {
        abstractRepository.deleteById(id);
    }
}
