package com.revature.servlet;

import java.io.IOException;
import java.nio.charset.Charset;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Paths;

import javax.servlet.http.HttpServletRequest;

import com.revature.cukes.TestCommander;
import com.revature.test.AppieTest;

public class RequestHelper {
	

	public static String process(HttpServletRequest request) {
		System.out.println("request processing:");
		
		/////////////////////////
		
		System.out.println("executing NGTest command");
		TestCommander.runTestSuite();
		
		////////////////////////////
		
		
		////////////////////////////
		System.out.println("Reading NGResults html from filesystem:");
		String result = "Error: servlet unable to read test results file";
		
		//assign result set as cucumber's html output!
		try {
			result = readFile("C:\\temp\\html\\index.html", StandardCharsets.UTF_8);
		} catch (IOException e) {
			System.out.println("Exception: file not found (Servlet.RequestHelper.readFile()");
			e.printStackTrace();
			System.out.println("End of Exception: file not found (Servlet.RequestHelper.readFile()");
		}
		/////////////////////////////////////////////////////
		
		//run hibernate test
		System.out.println("Performing database insertion:");
		AppieTest.main(null);
		////////////////////////////////////////////////////////
		System.out.println("Returning html response to frontend:");
		return result;
	}
	
	
	public static String readFile(String path, Charset encoding) throws IOException {
		byte[] encoded = Files.readAllBytes(Paths.get(path));
		return new String(encoded, encoding);
	}

}