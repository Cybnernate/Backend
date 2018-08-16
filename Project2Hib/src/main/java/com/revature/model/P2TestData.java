package com.revature.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name = "P2TestData")
public class P2TestData {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@SequenceGenerator(initialValue = 1, sequenceName = "testID_generator", allocationSize = 1, name = "testIDgenerator")
	
	@Column(name = "DATAID", nullable = false, precision = 10)
	private int did;
	
	@Column(name = "DATA", length = 40)
	private String data;
	
	@Column(name = "TESTID",nullable = false, precision = 10)
	private int tid;

	public P2TestData() {
		super();
		// TODO Auto-generated constructor stub
	}

	public P2TestData(int did, String data, int tid) {
		super();
		this.did = did;
		this.data = data;
		this.tid = tid;
	}

	public P2TestData(String data, int tid) {
		super();
		this.data = data;
		this.tid = tid;
	}
	
	
}
