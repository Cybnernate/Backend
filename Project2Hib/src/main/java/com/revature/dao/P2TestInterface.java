package com.revature.dao;

import java.util.List;

import com.revature.model.P2TestAnn;

public interface P2TestInterface {
	public boolean insertTestData(P2TestAnn p);
	public boolean deleteTestData(int tid);
	public P2TestAnn findTestDatabyId(int tid);
	public List<P2TestAnn> getAllTests();
	public void dropTestData();
	public boolean update_test_data(int tid, String result);
}
