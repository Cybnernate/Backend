package com.revature.test;

import com.google.gson.Gson;
import com.revature.dao.P2TestImplement;
import com.revature.model.P2Batch;
import com.revature.model.P2Location;
import com.revature.model.P2TestAnn;
import com.revature.model.P2Trainer;
import com.revature.model.P2User;

public class AppieTest {

	public static Gson g = new Gson();
	public static P2TestImplement tester = new P2TestImplement();
	
//	public static void main(String[] args) {
		
//		
		
//		P2Trainer p = new P2Trainer("Guy", "Brush", "gtreepwood@lucasarts.com", new String[]{"Java", ".NET"});
//		String theString = p.toString();
//		P2Trainer p2 = new ObjectMapper().readValue(theString, P2Trainer.class);
	
//		System.out.println(g.toJson(p));
//		System.out.println(theString);
		
		
//		P2Batch batch = new P2Batch("JTA Full Stack", "Java", 5, 4, "Yuvi", "N/A", "VA", "Plaza America", "201");
//		P2Location location = new P2Location(null, null, null);
//		P2Trainer trainer = new P2Trainer(null, null, null, args);
		//P2User user = new P2User("svp@revature.com", "p@$$w0rd");
		
		
		//P2TestAnn test1 = new P2TestAnn("verifyLogin","Fail", g.toJson(user));
		//System.out.println(tester.insertTestData(test1));
//		P2User t = g.fromJson(tester.findTestDatabyId(41).getTestData(), P2User.class);
//		System.out.println(t);
//		System.out.println(getJSONFromDB());
		//tester.update_test_data(test1.getTid(), "Pass");
		//System.out.println(tester.findTestDatabyId(test1.getTid()));	
//		tester.closeSession();
//	}
	
	public static String getJSONFromDB() {
		return g.toJson(tester.getAllTests());
	}

}
