package cukes;

import java.io.File;
import java.io.FileInputStream;
import java.io.InputStream;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.revature.Exceptions.TestFailedException;
import com.revature.dao.P2TestImplement;
import com.revature.model.P2TestAnn;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class project2cuke {

	public static WebDriver driver;
	public static JavascriptExecutor js;
	public static WebDriverWait wait;
	public static P2TestImplement tester;
	public static InputStream input;
	public static Properties props;
	public static P2TestAnn currTest;

	// LOGIN*********************************************
	@Given("^The user is on the login page$")
	public void the_user_is_on_the_login_page() throws Throwable {
		System.out.println("Going to AssignForce Website");
		input = new FileInputStream(
				"C:\\Users\\zephy\\Desktop\\P2CucumberGitHub\\Backend\\Project22\\src\\main\\resources/test.properties");
		props = new Properties();
		props.load(input);

		try {
			File chrome = new File("src/main/resources/chromedriver.exe");
			System.setProperty("webdriver.chrome.driver", chrome.getAbsolutePath());
			driver = new ChromeDriver();
			driver.get("https://assignforce-client.cfapps.io");
			tester = new P2TestImplement();
			currTest = new P2TestAnn("verifyLogin", "Fail", null);
			tester.insertTestData(currTest);

			// System.out.println("Properties: " +
			// props.getProperty("verifyLogin.username"));
		} catch (Exception e) {
			// tester.insertTestData(new P2TestAnn("verifyLogin", "Fail", null));
			// tester.closeSession();
			throw new TestFailedException();
		}
	}

	@When("^the user enters a valid svp@revature\\.com$")
	public void the_user_enters_a_valid_svp_revature_com() throws Throwable {
		System.out.println("Entering email");
		try {
			driver.manage().timeouts().implicitlyWait(50, TimeUnit.SECONDS);
			driver.findElement(By.name("email")).sendKeys(props.getProperty("verifyLogin.username"));
		} catch (Exception e) {
			// tester.insertTestData(new P2TestAnn("verifyLogin", "Fail", null));
			// tester.closeSession();
			throw new TestFailedException();
		}
	}

	@When("^the user enters a valid p@\\$\\$w(\\d+)rd$")
	public void the_user_enters_a_valid_p_$$w_rd(int arg1) throws Throwable {
		try {
			driver.manage().timeouts().implicitlyWait(50, TimeUnit.SECONDS);
			driver.findElement(By.name("password")).sendKeys(props.getProperty("verifyLogin.password"));
		} catch (Exception e) {
			// tester.insertTestData(new P2TestAnn("verifyLogin", "Fail", null));
			// tester.closeSession();
			throw new TestFailedException();
		}
	}

	@When("^the user clicks the login button$")
	public void the_user_clicks_the_login_button() throws Throwable {
		try {
			System.out.println("Clicking login button");
			driver.manage().timeouts().implicitlyWait(50, TimeUnit.SECONDS);
			driver.findElement(By.name("submit")).click();
		} catch (Exception e) {
			// tester.insertTestData(new P2TestAnn("verifyLogin", "Fail", null));
			// tester.closeSession();
			throw new TestFailedException();
		}
	}

	@Then("^the user arrives at the home page$")
	public void the_user_arrives_at_the_home_page() throws Throwable {
		System.out.println("Arrived at home page");
		driver.manage().timeouts().implicitlyWait(50, TimeUnit.SECONDS);
		tester.update_test_data(currTest.getTid(), "Pass");
	}

	// EXPORT CSV*************************************
	@Given("^the user is in the overview page$")
	public void the_user_is_in_the_overview_page() throws Throwable {
		currTest = new P2TestAnn("verifyExportCSV", "Fail", null);
		tester.insertTestData(currTest);
		while (ExpectedConditions.elementToBeClickable(By.xpath("//*[@id=\"mat-tab-label-0-0\"]")) == null) {

		}
		try {
			driver.findElement(By.xpath("//*[@id=\"mat-tab-label-0-0\"]")).click();
		} catch (Exception e) {
			throw new TestFailedException();
		}
	}

	@When("^the user clicks the export button$")
	public void the_user_clicks_the_export_button() throws Throwable {
		System.out.println("Clicking export button");
		while (ExpectedConditions.elementToBeClickable(By.xpath(
				"//*[@id=\\\"mat-expansion-panel-header-0\\\"]/span/mat-panel-description/mat-icon[1]")) == null) {

		}

		try {
			driver.findElement(
					By.xpath("//*[@id=\"mat-expansion-panel-header-0\"]/span/mat-panel-description/mat-icon[1]"))
					.click();

		} catch (Exception e) {
			throw new TestFailedException();
		}
	}

	@Then("^the user receives a CSV file$")
	public void the_user_receives_a_CSV_file() throws Throwable {
		tester.update_test_data(currTest.getTid(), "Pass");
	}

	// Verify batches in Progress
	@Given("^The user is on the overview page$")
	public void the_user_is_on_the_overview_page() throws Throwable {
		currTest = new P2TestAnn("verifyInProgress", "Fail", null);
		tester.insertTestData(currTest);
	}

	@When("^the user clicks the menu button$")
	public void the_user_clicks_the_menu_button() throws Throwable {

		while (ExpectedConditions.elementToBeClickable(
				By.xpath("//*[@id=\"mat-expansion-panel-header-0\"]/span/mat-panel-description/mat-icon[2]")) == null) {

		}
		try {
			driver.findElement(
					By.xpath("//*[@id=\"mat-expansion-panel-header-0\"]/span/mat-panel-description/mat-icon[2]"))
					.click();
		} catch (Exception e) {
			throw new TestFailedException();
		}
	}

	@When("^the user clicks the inProgress button$")
	public void the_user_clicks_the_inProgress_button() throws Throwable {
		while (ExpectedConditions
				.elementToBeClickable(By.xpath("//*[@id=\"cdk-overlay-0\"]/div/div/button[2]/span")) == null) {

		}
		try {

			driver.findElement(By.xpath("//*[@id=\"cdk-overlay-0\"]/div/div/button[2]/span")).click();
		} catch (Exception e) {
			throw new TestFailedException();
		}
	}

	@Then("^the user can view the inProgress batches$")
	public void the_user_can_view_the_inProgress_batches() throws Throwable {
		tester.update_test_data(currTest.getTid(), "Pass");
	}

	// Verify batches ending in two weeks
	@Given("^The user is on the overview page after displaying bathes in progress$")
	public void the_user_is_on_the_overview_page_after_displaying_bathes_in_progress() throws Throwable {
		currTest = new P2TestAnn("verifyInTwoWeeks", "Fail", null);
		tester.insertTestData(currTest);
	}

	@When("^the user clicks the two weeks button$")
	public void the_user_clicks_the_two_weeks_button() throws Throwable {
		while (ExpectedConditions
				.elementToBeClickable(By.xpath("//*[@id=\"cdk-overlay-0\"]/div/div/button[3]/span")) == null) {

		}
		try {

			driver.findElement(By.xpath("//*[@id=\"cdk-overlay-0\"]/div/div/button[3]/span")).click();
		} catch (Exception e) {
			throw new TestFailedException();
		}
	}

	@Then("^the user can view the begining in two weeks batches$")
	public void the_user_can_view_the_begining_in_two_weeks_batches() throws Throwable {
		tester.update_test_data(currTest.getTid(), "Pass");
	}


	//Create a new Location
	@Given("^The user is on the locations page$")
	public void the_user_is_on_the_locations_page() throws Throwable {
		currTest = new P2TestAnn("createLocation", "Fail", null);
		tester.insertTestData(currTest);
		
		while (ExpectedConditions.elementToBeClickable(By.xpath("//*[@id=\"mat-tab-label-0-2\"]/div")) == null) {

		}
		try {
			driver.findElement(By.xpath("//*[@id=\"mat-tab-label-0-2\"]/div")).click();
		} catch (Exception e) {
			throw new TestFailedException();
		}
	}

	@When("^the user clicks on teh adding location button$")
	public void the_user_clicks_on_teh_adding_location_button() throws Throwable {
		while (ExpectedConditions.elementToBeClickable(By.xpath("//*[@id=\"mat-expansion-panel-header-1\"]/span[1]/mat-panel-description/mat-icon")) == null) {

		}
		try {
			driver.findElement(By.xpath("//*[@id=\"mat-expansion-panel-header-1\"]/span[1]/mat-panel-description/mat-icon")).click();
		} catch (Exception e) {
			throw new TestFailedException();
		}
	}

	@When("^the user enters a valid <locationName>$")
	public void the_user_enters_a_valid_locationName() throws Throwable {
	    driver.findElement(By.xpath("//*[@id=\"mat-input-0\"]"))
	    .sendKeys(props.getProperty("addLocation.location"));
	}

	@When("^the user enters a valid <cityName>$")
	public void the_user_enters_a_valid_cityName() throws Throwable {
		driver.findElement(By.xpath("//*[@id=\"mat-input-1\"]"))
	    .sendKeys(props.getProperty("addLocation.city"));
	}

	@When("^the user enters a valid <stateName>$")
	public void the_user_enters_a_valid_stateName() throws Throwable {
		driver.findElement(By.xpath("//*[@id=\"mat-input-2\"]"))
	    .sendKeys(props.getProperty("addLocation.state"));
	}

	@Then("^the user can click the add button$")
	public void the_user_can_click_the_add_button() throws Throwable {
		while (ExpectedConditions.elementToBeClickable(By.xpath("//*[@id=\"mat-dialog-0\"]/app-location-add-dialog/div[2]/button[1]")) == null) {

		}
		try {
			driver.findElement(By.xpath("//*[@id=\"mat-dialog-0\"]/app-location-add-dialog/div[2]/button[1]")).click();
		} catch (Exception e) {
			throw new TestFailedException();
		}
	    //tester.update_test_data(currTest.getTid(), "Pass");
	}
	
	//Logout function
	// **********************************************************

	// LOGOUT****************************************************
	@Given("^The user is logged in$")
	public void the_user_is_logged_in() throws Throwable {
		currTest = new P2TestAnn("verifyLogout", "Fail", null);
		tester.insertTestData(currTest);
	}

	@When("^The user clicks logout$")
	public void the_user_clicks_logout() throws Throwable {
		driver.findElement(By.xpath("//*[@id=\"logoutBTN\"]")).click();
	}

	@Then("^the user lands on the login page$")
	public void the_user_lands_on_the_login_page() throws Throwable {
		tester.update_test_data(currTest.getTid(), "Pass");
		tester.closeSession();
		input.close();
		driver.close();
		driver.quit();
	}
	// **********************************************************
	
	
	@Given("^The user is on the trainer page$")
	public void the_user_is_on_the_trainer_page() throws Throwable {
		currTest = new P2TestAnn("verifyResume", "Fail", null);
		tester.insertTestData(currTest);
		while(driver.findElement(By.xpath("//*[@id=\"mat-tab-label-0-4\"]"))==null) {
			
		}
		try {
			driver.findElement(By.xpath("//*[@id=\"mat-tab-label-0-4\"]")).click();
		}
		catch(Exception e) {
			throw new TestFailedException();
		}
	}

	@When("^clicks the download resume button$")
	public void clicks_the_download_resume_button() throws Throwable {
		while(driver.findElement(By.xpath("//*[@id=\"trainersDiv\"]/mat-card[1]/mat-card-content/div[1]/mat-list/app-trainer-item/mat-list-item/div/button[1]"))==null) {
			
		}
		try {
			driver.findElement(By.xpath("//*[@id=\"trainersDiv\"]/mat-card[1]/mat-card-content/div[1]/mat-list/app-trainer-item/mat-list-item/div/button[1]")).click();
		}
		catch(Exception e) {
			throw new TestFailedException();
		}
	}

	@Then("^the user has downloaded a resume$")
	public void the_user_has_downloaded_a_resume() throws Throwable {
		tester.update_test_data(currTest.getTid(), "Pass");
	}

}