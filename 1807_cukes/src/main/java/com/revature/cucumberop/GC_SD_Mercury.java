package com.revature.cucumberop;

import java.io.File;
import java.io.FileInputStream;
import java.io.InputStream;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.revature.pom.LoginPage;
import com.revature.pom.OverviewPage;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class GC_SD_Mercury {

	public static WebDriver driver;
	public static WebDriverWait wait;
	public static Actions actions;
	public static InputStream input;
	public static Properties props = new Properties();
	
	
	//LOGING LOGOUT CHECK*************************************
	@Given("^the application is opened$")
	
	public void the_application_is_opened() throws Throwable {
		System.out.println("#####################################");
		String current = new java.io.File( "." ).getCanonicalPath();
        System.out.println("Current dir:"+current);
        System.out.println("#####################################");
        
		File chrome = new File("src/main/resources/chromedriver");
		input = new FileInputStream
				("src/main/resources/test.properties");
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
		System.out.println("logged in successfully");
		//driver.quit();
		driver.manage().timeouts().implicitlyWait(5,TimeUnit.SECONDS);
		driver.close();
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
	    System.out.println("i'm clicking the overview tab");
	    
	    //driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
	    
		//wait.until(ExpectedConditions.elementToBeClickable(OverviewPage.overviewTab(driver)));
		try {
			while(ExpectedConditions.elementToBeClickable(OverviewPage.overviewTab(driver)) == null) {
			
			}
		}
		catch(Exception e) {
			
		}
		try {
			actions.moveToElement(OverviewPage.overviewTab(driver)).click().perform();
		}
		catch(Exception e) {
			
		}
			
		
	}

	@Then("^the user goes to the overview$")
	public void the_user_goes_to_the_overview() throws Throwable {
		System.out.println("i'm in overview");
	    driver.close();
	}
	
	
	
	
	
	
	//**********************************************************
	
	//EXPORT CSV************************************************
	@Given("^the user is on the overview page$")
	public void the_user_is_on_the_overview_page() throws Throwable {
		System.out.println("1");
		//driver = new ChromeDriver();
		try {
			while (ExpectedConditions.elementToBeClickable(OverviewPage.overviewTab(driver)) == null) {
			
			}
		}
		catch(Exception e) {
			
		}
		try {
			actions.moveToElement(OverviewPage.overviewTab(driver)).click().perform();
		}
		catch(Exception e) {
			
		}
	}

	@When("^the user clicks the export button$")
	public void the_user_clicks_the_export_button() throws Throwable {
		System.out.println("1");
		try {
		while (ExpectedConditions.elementToBeClickable(OverviewPage.exportCSVButton(driver)) == null) {
			
		}
		}
		catch(Exception e) {
			
		}
		try {
			actions.moveToElement(OverviewPage.exportCSVButton(driver)).click().perform();
		}
		catch(Exception e) {
			
		}
	}	

	@Then("^the document is downloaded$")
	public void the_document_is_downloaded() throws Throwable {
		System.out.println("1");
		driver.close();
	}	
	
	//**********************************************************
}
