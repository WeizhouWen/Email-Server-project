package com.scu.coen241.mailServer.pojo;

import lombok.Data;

@Data
public class User {
    private Integer userId;
    private String userEmailAddress;
    private String userPassword;
}