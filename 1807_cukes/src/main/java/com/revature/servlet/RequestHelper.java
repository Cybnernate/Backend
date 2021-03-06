package com.revature.servlet;

import java.io.File;
import java.io.IOException;
import java.nio.charset.Charset;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Paths;

import javax.servlet.http.HttpServletRequest;

import com.revature.cucumberop.TestCommander;
import com.revature.test.AppieTest;

public class RequestHelper {


	public static String process(HttpServletRequest request) throws IOException {

		TestCommander.runTestSuite();

		String result = "Error: servlet unable to read test results file";

		try {
			//CHANGE THIS PATH!!!!
			result = readFile("C:\\TestOutput\\emailable-report.html");
			//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
		} catch (IOException e) {
			System.out.println("Exception: file not found (Servlet.RequestHelper.readFile()");
			e.printStackTrace();
			System.out.println("End of Exception: file not found (Servlet.RequestHelper.readFile()");
		}
		/////////////////////////////////////////////////////

		//run hibernate test
		//System.out.println("Performing database insertion:");
		//AppieTest.main(null);
		////////////////////////////////////////////////////////
		//System.out.println("Returning html response to frontend:");
		System.out.println(result);
		return result;
	}


	public static String readFile(String fileName) throws IOException {
        ClassLoader classLoader = new RequestHelper().getClass().getClassLoader();

        //File file = new File(classLoader.getResource(fileName).getFile());
		   File file = new File(fileName);

        //File is found
        System.out.println("File Found : " + file.exists());

        //Read File Content
        String content = new String(Files.readAllBytes(file.toPath()));
        System.out.println(content);
		//byte[] encoded = Files.readAllBytes(Paths.get(path));
		//System.out.println(encoded);
		//return new String(encoded, encoding);
		return content;
	}

}
