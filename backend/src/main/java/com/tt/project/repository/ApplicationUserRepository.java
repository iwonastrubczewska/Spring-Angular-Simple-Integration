package com.tt.project.repository;

import com.tt.project.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ApplicationUserRepository extends JpaRepository<User, Long> {

    User findByUsername(String username);

}
