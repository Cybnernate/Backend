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
	
	
	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


	public String getCity() {
		return city;
	}


	public void setCity(String city) {
		this.city = city;
	}


	public String getState() {
		return state;
	}


	public void setState(String state) {
		this.state = state;
	}


	@Override
	public String toString() {
		return "P2Location [name=" + name + ", city=" + city + ", state=" + state + "]";
	}
	
}
