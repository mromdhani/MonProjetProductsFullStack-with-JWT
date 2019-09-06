package com.lbc.security.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.lbc.model.security.User;


public interface UserRepository extends JpaRepository<User, Long> {
    User findByUsername(String username);
}
