package com.scu.coen241.mailServer.dao;

import com.scu.coen241.mailServer.pojo.User;

public interface UserMapper {

    int deleteByPrimaryKey(Integer userId);

    int insert(User record);

    int insertSelective(User record);

    User selectByPrimaryKey(Integer userId);

    int updateByPrimaryKeySelective(User record);

    int updateByPrimaryKey(User record);

    User selectByMailAddress(String userEmailAddress);
}