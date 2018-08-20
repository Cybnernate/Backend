package com.revature.cukes;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(plugin= {"pretty", "json:C:\\test.json", "html:C:\\Program Files\Apache Software Foundation\Tomcat 8.5_Tomcat8-copy\webapps"}, features= {"src/main/java/com/revature/features"})
public class TestRunner extends AbstractTestNGCucumberTests{

}
