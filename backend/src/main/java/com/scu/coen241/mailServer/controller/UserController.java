package com.scu.coen241.mailServer.controller;

import com.scu.coen241.mailServer.pojo.User;
import com.scu.coen241.mailServer.services.UserService;
import com.scu.coen241.mailServer.utils.Result;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping(value = "/user")
public class UserController {

    @Autowired
    private UserService userService;

    @RequestMapping(value="/signup",method= RequestMethod.POST)
    public Result register(@RequestBody @Valid User user) {
        return userService.signUp(user);
    }

    @RequestMapping(value="/login",method= RequestMethod.POST)
    public Result<User> login(@RequestBody @Valid User user) {
        Result<User> result = userService.login(user);
        return result;
    }
}
