package com.lbc.security.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.lbc.model.security.Authority;


public interface AuthorityRepository extends JpaRepository<Authority, Long> {
  
}
