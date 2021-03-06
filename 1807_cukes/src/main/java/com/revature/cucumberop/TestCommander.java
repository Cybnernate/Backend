package com.revature.cucumberop;

import java.util.ArrayList;

import org.testng.TestListenerAdapter;
import org.testng.TestNG;

public class TestCommander {

public static void main(String[] args) {
	runTestSuite();
}
	
	@SuppressWarnings("deprecation")
	public static void runTestSuite() {
		TestListenerAdapter tla = new TestListenerAdapter();
		TestNG testng = new TestNG();
		ArrayList<String> tests = new ArrayList<String>();
		tests.add("C:\\Program Files\\Apache\\apache-maven-3.5.4\\bin\\testingng.xml");
		testng.setTestSuites(tests);
		testng.addListener(tla);
		testng.run();
	}

}
