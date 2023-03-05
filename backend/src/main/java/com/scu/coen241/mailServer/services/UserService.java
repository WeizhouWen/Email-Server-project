package com.scu.coen241.mailServer.services;

import com.scu.coen241.mailServer.pojo.User;
import com.scu.coen241.mailServer.utils.Result;

public interface UserService {
    Result<User> login(User record);
    Result signUp(User record);
}
