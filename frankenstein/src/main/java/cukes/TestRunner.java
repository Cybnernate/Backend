package cukes;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(plugin= {"pretty", "html:C:\\temp\\html", "json:C:\\temp\\jsons"}, features= {})
public class TestRunner extends AbstractTestNGCucumberTests{

}
