package com.scu.coen241.mailServer.services;

import com.scu.coen241.mailServer.dto.MailDto;
import com.scu.coen241.mailServer.pojo.Mail;
import com.scu.coen241.mailServer.utils.Result;

public interface MailService {
    Result<Mail> selectMailByMailId(int mailId);
    Result<String> sendMail(MailDto mailDto);
    Result createOrUpdateDraft(MailDto mailDto);
}
