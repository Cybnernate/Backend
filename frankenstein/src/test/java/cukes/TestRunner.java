package cukes;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(plugin= {"pretty", "html:src/main/resources/testOutput/", "json:C:\\temp\\jsons"}, features= {"src/test/java/features/launchApplication.feature", "src/test/java/features/logout.feature", "src/test/java/features/verifyBatchesPage.feature", "src/test/java/features/verifyCurriculaPage.feature", "src/test/java/features/verifyLogin.feature"})
public class TestRunner extends AbstractTestNGCucumberTests{

}
