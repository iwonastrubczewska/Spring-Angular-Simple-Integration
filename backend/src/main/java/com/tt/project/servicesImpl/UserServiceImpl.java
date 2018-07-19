package com.tt.project.servicesImpl;

import com.tt.project.model.User;
import com.tt.project.repository.ApplicationUserRepository;
import com.tt.project.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;

public class UserServiceImpl extends AbstractServiceImpl<User> implements UserService {

    @Autowired
    private ApplicationUserRepository applicationUserRepository;

    @Override
    public User findByUsername(String userName) {
        return applicationUserRepository.findByUsername(userName);
    }


}
