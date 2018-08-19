package com.revature.servlet;

import javax.servlet.http.HttpServletRequest;

public class RequestHelper {

	public static String process(HttpServletRequest request) {
		System.out.println("request processing:");
		
		/////////////////////////
		////////////////////////////
		
		
		////////////////////////////
		System.out.println("Reading NGResults html from filesystem:");
		String result = "Error: servlet unable to read test results file";
		
		//assign result set as cucumber's html output!
		try {
			result = readFile("C:\\index.html", StandardCharsets.UTF_8);
		} catch (IOException e) {
			System.out.println("Exception: file not found (Servlet.RequestHelper.readFile()");
			e.printStackTrace();
			System.out.println("End of Exception: file not found (Servlet.RequestHelper.readFile()");
		}
		/////////////////////////////////////////////////////
		System.out.println("Returning html response to frontend:");
		return result;
	}

}
