package com.revature.model;

public class P2User {
	private String username;
	private String password;
	public P2User(String username, String password) {
		super();
		this.username = username;
		this.password = password;
	}
	
	@Override
	public String toString() {
		return "P2User [username=" + username + ", password=" + password + "]";
	}
	
	
}
