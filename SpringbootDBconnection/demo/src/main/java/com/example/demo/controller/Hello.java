package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import java.util.List;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dao.UserDao;
import com.example.demo.model.User;

@Controller

public class Hello {

    @Autowired
    UserDao userdao;

    @RequestMapping("/abc")
    public String hello() {
        return "index";
    }

    @RequestMapping("/addUser")
    public User addUser(User user) {
        return userdao.save(user);

    }

    @GetMapping("/addUser")
    public List<User> getuser() {
        return (List<User>) userdao.findAll();
    }

}
