package com.revature.servlet;

import javax.servlet.http.HttpServletRequest;

public class RequestHelper {

	public static CharSequence process(HttpServletRequest request) {
		System.out.println("boo");
		return "hello";
	}

}
