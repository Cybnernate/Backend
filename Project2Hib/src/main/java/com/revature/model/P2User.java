package com.revature.model;

public class P2User {
	private String username;
	private String password;
	public P2User(String username, String password) {
		super();
		this.username = username;
		this.password = password;
	}
	
	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	@Override
	public String toString() {
		return "P2User [username=" + username + ", password=" + password + "]";
	}
	
	
}
