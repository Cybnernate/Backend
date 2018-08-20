package com.revature.model;

public class P2Location {
	private String name;
	private String city;
	private String state;
	public P2Location(String name, String city, String state) {
		super();
		this.name = name;
		this.city = city;
		this.state = state;
	}
	
	@Override
	public String toString() {
		return "P2Location [name=" + name + ", city=" + city + ", state=" + state + "]";
	}
	
}
