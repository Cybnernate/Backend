package com.revature.model;

import java.util.Arrays;

public class P2Trainer {
	private String firstName;
	private String lastName;
	private String email;
	private String[] skills;
	public P2Trainer(String firstName, String lastName, String email, String[] skills) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.skills = skills;
	}
	@Override
	public String toString() {
		return "P2Trainer [firstName=" + firstName + ", lastName=" + lastName + ", email=" + email + ", skills="
				+ Arrays.toString(skills) + "]";
	}
	
}
