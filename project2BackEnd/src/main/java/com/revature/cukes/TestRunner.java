package com.revature.cukes;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

 @CucumberOptions(plugin= {"pretty", "json:C:\\test.json", "json:C:\\temp\\jsons"}, features= {"src/main/java/com/revature/features"})
public class TestRunner extends AbstractTestNGCucumberTests{

}
