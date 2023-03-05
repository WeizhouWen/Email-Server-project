package com.scu.coen241.mailServer;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@MapperScan("com.scu.coen241.mailServer.dao")
@SpringBootApplication
public class MailServerApplication {

	public static void main(String[] args) {
		SpringApplication.run(MailServerApplication.class, args);
	}

}
