package com.revature.Exceptions;

public class TestFailedException extends Exception{
private String message;
	
	public TestFailedException() {}
	
	public TestFailedException(String message) {
		this.message = message;
	}
	public String getMessage() {
		return "Cucumber Test has failed!";
	}
}
