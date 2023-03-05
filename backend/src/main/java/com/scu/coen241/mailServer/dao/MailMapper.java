package com.scu.coen241.mailServer.dao;

import com.scu.coen241.mailServer.pojo.Mail;

public interface MailMapper {

    int insertSelective(Mail record);

    Mail selectByPrimaryKey(Integer mailId);

    int updateByPrimaryKeySelective(Mail record);

}