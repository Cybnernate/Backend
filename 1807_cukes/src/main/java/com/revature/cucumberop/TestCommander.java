package com.revature.cucumberop;

import java.util.ArrayList;

import org.testng.TestListenerAdapter;
import org.testng.TestNG;

public class TestCommander {
	
	
	@SuppressWarnings("deprecation")
	public static void runTestSuite() {
		TestListenerAdapter tla = new TestListenerAdapter();
		TestNG testng = new TestNG();
		ArrayList<String> tests = new ArrayList<String>();
		tests.add("src/main/resources/testingng.xml");
		testng.setTestSuites(tests);
		testng.addListener(tla);
		testng.run(); 
	}

}
