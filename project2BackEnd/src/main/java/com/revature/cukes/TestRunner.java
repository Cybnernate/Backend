package com.revature.cukes;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

 @CucumberOptions(plugin= {"pretty", "html:C:\\Program Files\Apache Software Foundation\Tomcat 8.5_Tomcat8-copy\webapps\reports"}, features= {"src/main/java/com/revature/features"})
public class TestRunner extends AbstractTestNGCucumberTests{

}
