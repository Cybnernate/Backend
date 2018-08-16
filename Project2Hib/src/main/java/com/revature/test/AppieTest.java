package com.revature.test;

import com.revature.dao.P2TestImplement;
import com.revature.model.P2TestAnn;

public class AppieTest {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		P2TestImplement tester = new P2TestImplement();
		P2TestAnn test1 = new P2TestAnn("First Test","Fail");
		tester.insertTestData(test1);
		tester.findTestDatabyId(1);
		//tester.update_test_data(1, "Pass");
	}

}
