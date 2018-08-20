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
	
	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String[] getSkills() {
		return skills;
	}

	public void setSkills(String[] skills) {
		this.skills = skills;
	}

	@Override
	public String toString() {
		return "P2Trainer [firstName=" + firstName + ", lastName=" + lastName + ", email=" + email + ", skills="
				+ Arrays.toString(skills) + "]";
	}
	
}
