package net.javaguides.basic.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import net.javaguides.basic.model.User;
import net.javaguides.basic.repository.Userrepository;

@RestController
@RequestMapping("api/")

public class UserController {

    @Autowired
    private Userrepository userRepository;

    @GetMapping("users")
    @CrossOrigin(origins = "http://localhost:3000/")
    public List<User> getUsers() {
        return this.userRepository.findAll();
    }
}