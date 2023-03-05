package com.scu.coen241.mailServer.pojo;

import lombok.Data;

@Data
public class ReceivedMail {
    private Integer mailId;
    private Integer ownerId;
    private Integer sentUserId;
    private Integer readStatus;
    private Integer isDeleted;

}