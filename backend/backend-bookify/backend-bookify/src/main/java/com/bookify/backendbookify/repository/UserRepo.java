package com.bookify.backendbookify.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bookify.backendbookify.model.User;


public interface UserRepo  extends JpaRepository<User,Long>
{
    User findByEmail(String username);
}
