package net.javaguides.basic.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import net.javaguides.basic.model.User;

@Repository
public interface Userrepository extends JpaRepository<User, Long> {

}
