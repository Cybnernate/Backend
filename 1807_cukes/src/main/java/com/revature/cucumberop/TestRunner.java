package com.revature.cucumberop;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(plugin= {"pretty", "html:C:\\OUT\\html", "json:C:\\OUT\\json"}, 
features= {"src/test/resources/exportCSV.feature"})
public class TestRunner extends AbstractTestNGCucumberTests{

}
