package cukes;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(plugin= {"pretty", "html:C:\\temp\\html", "json:C:\\temp\\jsons"}, 
	features= {"src/test/java/features"}
	//,glue = {"src/main/java/cukes"}
	//, tags = {"~@login", "~@exportCSV"}
)
public class TestRunner extends AbstractTestNGCucumberTests{

}
