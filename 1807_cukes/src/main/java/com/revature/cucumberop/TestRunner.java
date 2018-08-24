package com.revature.cucumberop;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(plugin= {"pretty", "html:reports", "json:reports/report.json"}, 
features= {"C:\\Program Files\\Apache Software Foundation\\Tomcat 8.5_Tomcat8-copy\\webapps\\project2BackEnd\\WEB-INF\\classes\\features"})
public class TestRunner extends AbstractTestNGCucumberTests{
	
}
