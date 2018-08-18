package com.revature.cukes;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(plugin= {"pretty", "html:C:\\temp\\html", "json:C:\\temp\\jsons"}, features= {"C:\\Users\\Hen\\Documents\\Revature-Workspace\\frankenstein\\src\\main\\java\\com\\revature\\features\\launchApplication.feature"})
public class TestRunner extends AbstractTestNGCucumberTests{

}
