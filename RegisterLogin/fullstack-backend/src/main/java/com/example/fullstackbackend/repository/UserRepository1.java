package com.example.fullstackbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.fullstackbackend.model.Users;

public interface UserRepository1 extends JpaRepository<Users, Long> {
	@Query("SELECT u FROM Users u WHERE u.email = ?1")
	public Users findByEmail(String email);

}
