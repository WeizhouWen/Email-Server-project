package com.scu.coen241.mailServer.services;

import com.github.pagehelper.PageInfo;
import com.scu.coen241.mailServer.utils.Result;
import com.scu.coen241.mailServer.vo.MailVo;

public interface OutboxService {
    Result<PageInfo<MailVo>> queryOutboxMail(int ownerId, int page, int pageSize, int sendStatus);
    Result deleteOutboxMail(int mailId);
}
