package com.tt.project.service;

import com.tt.project.model.User;

public interface UserService extends AbstractService<User> {
    User findByUsername(String userName);
}
