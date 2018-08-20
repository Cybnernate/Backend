package cukes;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(plugin= {"json:src/main/resources/test.json"}, features= {"/Users/jacobgolding/Desktop/revature/project/project_2/cybernate/BackEnd/frankenstein/src/main/java/com/revature/features/averifyLogin.feature"})
public class TestRunner extends AbstractTestNGCucumberTests{

}
