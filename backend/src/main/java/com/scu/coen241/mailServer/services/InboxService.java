package com.scu.coen241.mailServer.services;

import com.github.pagehelper.PageInfo;
import com.scu.coen241.mailServer.utils.Result;
import com.scu.coen241.mailServer.vo.MailVo;

public interface InboxService {
    Result<PageInfo<MailVo>> queryInboxMail(int ownerId, int page, int pageSize);
    Result readInboxMail(int mailId);
    Result deleteInboxMail(int mailId);
}
