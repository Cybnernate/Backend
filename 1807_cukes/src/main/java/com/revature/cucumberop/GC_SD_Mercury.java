package com.revature.cucumberop;

import java.io.File;
import java.io.FileInputStream;
import java.io.InputStream;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.revature.pom.CurriculaPage;
import com.revature.pom.LocationsPage;
import com.revature.pom.LoginPage;
import com.revature.pom.OverviewPage;
import com.revature.pom.TrainerPage;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class GC_SD_Mercury {

	public static WebDriver driver;
	public static WebDriverWait wait;
	public static Actions actions;
	public static InputStream input;
	public static Properties props = new Properties();
	private static int theCounter = 0;


	//LOGING LOGOUT CHECK*************************************
	@Given("^the application is opened$")
	public void the_application_is_opened() throws Throwable {
		System.out.println("#####################################");
		String current = new java.io.File( "." ).getCanonicalPath();
        System.out.println("Current dir:"+current);
        System.out.println("#####################################");

        //For mac environmets
		//File chrome = new File("src/main/resources/chromedriver");
		//For windows environmets
		File chrome = new File("C:\\Users\\Administrator\\.jenkins\\jobs\\Backend\\workspace\\1807_cukes\\src\\main\\resources\\chromedriver.exe");
		
		input = new FileInputStream
				("C:\\Users\\Administrator\\.jenkins\\jobs\\Backend\\workspace\\1807_cukes\\src\\main\\resources\\test.properties");
		props.load(input);
		System.setProperty("webdriver.chrome.driver", chrome.getAbsolutePath());
		driver = new ChromeDriver();
		wait = new WebDriverWait(driver,22);
		actions = new Actions(driver);
		driver.get("https://assignforce-client.cfapps.io");

	}

//	public static void launchApplication() {
//
//	}

	@When("^valid username and password are entered$")
	public void valid_username_and_password_are_entered() throws Throwable {
		wait.until(ExpectedConditions.elementToBeClickable(LoginPage.user(driver)));

		LoginPage.user(driver).sendKeys(props.getProperty("verifyLogin.username"));

		wait.until(ExpectedConditions.elementToBeClickable(LoginPage.pass(driver)));

		LoginPage.pass(driver).sendKeys(props.getProperty("verifyLogin.password"));
	}


	@When("^the user clicks login button$")
	public void the_user_clicks_login_button() throws Throwable {

		wait.until(ExpectedConditions.elementToBeClickable(LoginPage.submit(driver)));

		actions.moveToElement(LoginPage.submit(driver)).click().perform();;
	}

	@Then("^user should be able to gain access to the application$")
	public void user_should_be_able_to_gain_access_to_the_application() throws Throwable {
		//driver.manage().timeouts().implicitlyWait(5,TimeUnit.SECONDS);
	}

	@Then("^the user is in AssignForce$")
	public void the_user_is_in_AssignForce() throws Throwable {
		
	}

	//Go to overview tab
	@Given("^the user is logged in$")
	public void the_user_is_logged_in() throws Throwable {
	    System.out.println("I'm logged in");
	}

	@When("^the user clicks on Overview tab$")
	public void the_user_clicks_on_Overview_tab() throws Throwable {
		try {
			actions.moveToElement(OverviewPage.overviewTab(driver)).click().perform();
		}
		catch(Exception e) {
			System.out.println("the user clicks on Overview tab: Errored");
		}


	}

	@Then("^the user goes to the overview$")
	public void the_user_goes_to_the_overview() throws Throwable {
		driver.close();
	}


	//**********************************************************

	//EXPORT CSV************************************************
	@Given("^the user is on the overview page$")
	public void the_user_is_on_the_overview_page() throws Throwable {
		
		try {
			actions.moveToElement(OverviewPage.overviewTab(driver)).click().perform();
		}
		catch(Exception e) {
			System.out.println("the user is on the overview page: Errored");
		}
	}

	@When("^the user clicks the export button$")
	public void the_user_clicks_the_export_button() throws Throwable {
		try {
			actions.moveToElement(OverviewPage.exportCSVButton(driver)).click().perform();
		}
		catch(Exception e) {

		}
	}

	@Then("^the document is downloaded$")
	public void the_document_is_downloaded() throws Throwable {
		driver.quit();
	}

	//**********************************************************

	// Add a focus***********************************************
	@Given("^the user is on the curricula page$")
	public void the_user_is_on_the_curricula_page() throws Throwable {
		
		try {
			actions.moveToElement(CurriculaPage.curriculaTab(driver)).click().perform();
		} catch (Exception e) {
		}
	}

	@When("^the user clicks the focus button$")
	public void the_user_clicks_the_focus_button() throws Throwable {
	
		try {
			actions.moveToElement(CurriculaPage.addFocusButton(driver)).click().perform();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	@When("^the user enters focus name$")
	public void the_user_enters_focus_name() throws Throwable {
		
		try {
			//driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
			actions.moveToElement(CurriculaPage.newSkillName(driver)).click().sendKeys(props.getProperty("addFocus.name"));
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	@When("^the user clicks focus drop down$")
	public void the_user_clicks_focus_drop_down() throws Throwable {
	
		try {
			actions.moveToElement(CurriculaPage.skillDropDown(driver)).click().perform();
		} catch (Exception e) {
			System.out.println("in Focus drop downs");
		}
	}

	@When("^the user clicks a focus option$")
	public void the_user_clicks_a_focus_option() throws Throwable {
		
		try {
			actions.moveToElement(CurriculaPage.skillOption(driver)).click().perform();
			actions.sendKeys(Keys.ESCAPE).perform();
		} catch (Exception e) {
			System.out.println("in Focus drop dropDowns");
		}
	}

	@When("^the the user clicks add focus button$")
	public void the_the_user_clicks_add_focus_button() throws Throwable {
	
		try {
			actions.moveToElement(CurriculaPage.addNewFocusButton(driver)).click().perform();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	@Then("^the user has added a skill$")
	public void the_user_has_added_a_skill() throws Throwable {
		driver.quit();
	}

	// **********************************************************

	// add new skill*********************************************
	@When("^the user clicks the skill button$")
	public void the_user_clicks_the_skill_button() throws Throwable {
		try {
			actions.moveToElement(CurriculaPage.addSkillButton(driver)).click().perform();
		} catch (Exception e) {
			e.printStackTrace();
			System.exit(0);
		}
	}

	@When("^the user enters skill name$")
	public void the_user_enters_skill_name() throws Throwable {
		try {
			actions.moveToElement(CurriculaPage.newSkillName(driver)).click().sendKeys(props.getProperty("addSkill.name"));
		} catch (Exception e) {
			System.exit(0);
		}
	}

	@When("^the the user clicks add new skill button$")
	public void the_the_user_clicks_add_new_skill_button() throws Throwable {
		try {
			actions.moveToElement(CurriculaPage.newSkillName(driver)).click().perform();
		} catch (Exception e) {

		}
	}

	@Then("^the user has added a focus$")
	public void the_user_has_added_a_focus() throws Throwable {
		driver.quit();
	}
	// *********************************************************

	// delete trainer*******************************************
	@Given("^the user is on the trainer page$")
	public void the_user_is_on_the_trainer_page() throws Throwable {
		try {
			actions.moveToElement(TrainerPage.trainerTab(driver)).click().perform();
		} catch (Exception e) {

		}
	}

	@When("^the user clicks the delete trainer button$")
	public void the_user_clicks_the_delete_trainer_button() throws Throwable {
		try {
			actions.moveToElement(TrainerPage.deleteTrainer(driver)).click().perform();
		} catch (Exception e) {

		}
	}

	@Then("^the trainer is deleted$")
	public void the_trainer_is_deleted() throws Throwable {
		driver.quit();
	}
	// **********************************************************

	// download resume*******************************************
	@When("^the user clicks the download resume button$")
	public void the_user_clicks_the_download_resume_button() throws Throwable {
		try {
			actions.moveToElement(TrainerPage.downloadResume(driver)).click().perform();
		} catch (Exception e) {

		}
	}

	@Then("^the resume is downloaded$")
	public void the_resume_is_downloaded() throws Throwable {
		driver.quit();
	}
	// **********************************************************

	// editCapital One*******************************************
	@Given("^the user is on the locations page$")
	public void the_user_is_on_the_locations_page() throws Throwable {
		try {
			actions.moveToElement(LocationsPage.locationsTab(driver)).click().perform();
		} catch (Exception e) {

		}
	}

	@When("^the user clicks the edit button$")
	public void the_user_clicks_the_edit_button() throws Throwable {
		try {
			actions.moveToElement(LocationsPage.editCapitalButton(driver)).click().perform();
		} catch (Exception e) {

		}
	}

	@When("^the user clicks the city input$")
	public void the_user_clicks_the_city_input() throws Throwable {
		try {
			actions.moveToElement(LocationsPage.capitalCity(driver)).sendKeys(props.getProperty("edit.city"));
		} catch (Exception e) {

		}
	}

	@When("^the user clicks the state input$")
	public void the_user_clicks_the_state_input() throws Throwable {
		try {
			actions.moveToElement(LocationsPage.capitalState(driver)).click().sendKeys(props.getProperty("edit.state"));
		} catch (Exception e) {

		}
	}

	@When("^the user clicks the update capital button$")
	public void the_user_clicks_the_update_capital_button() throws Throwable {
		try {
			actions.moveToElement(LocationsPage.capitalUpdate(driver)).click().perform();
		} catch (Exception e) {

		}
	}

	@Then("^capital one is updated$")
	public void capital_one_is_updated() throws Throwable {
		driver.quit();
	}
	// **********************************************************

	// reston drop down******************************************
	@When("^the user clicks the reston drop down$")
	public void the_user_clicks_the_reston_drop_down() throws Throwable {
		try {
			actions.moveToElement(LocationsPage.restonDropDown(driver)).click().perform();
		} catch (Exception e) {

		}
	}

	@Then("^the locations are opened$")
	public void the_locations_are_opened() throws Throwable {
		driver.quit();
	}
	//**********************************************************


}
