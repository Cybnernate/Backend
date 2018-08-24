package com.revature.cucumberop;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(plugin= {"pretty", "html:reports", "json:reports/report.json"}, 
features= {"src/main/resources/features"})
public class TestRunner extends AbstractTestNGCucumberTests{
	
}
