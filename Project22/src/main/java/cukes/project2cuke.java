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
	
	//LOGIN*********************************************
	@Given("^The user is on the login page$")
	public void the_user_is_on_the_login_page() throws Throwable {
	    System.out.println("Going to AssignForce Website");
	    input = new FileInputStream("C:\\Users\\zephy\\Desktop\\P2CucumberGitHub\\Backend\\Project22\\src\\main\\resources/test.properties");
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
	    
	    	//System.out.println("Properties: " + props.getProperty("verifyLogin.username"));
	    }
	    catch(Exception e) {
	    	//tester.insertTestData(new P2TestAnn("verifyLogin", "Fail", null));
	    	//tester.closeSession();
	    	throw new NullPointerException();
	    }
	}

	@When("^the user enters a valid svp@revature\\.com$")
	public void the_user_enters_a_valid_svp_revature_com() throws Throwable {
		System.out.println("Entering email");
		try {
			driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
			driver.findElement(By.name("email")).sendKeys(props.getProperty("verifyLogin.username"));
		}
	    catch(Exception e) {
	    	//tester.insertTestData(new P2TestAnn("verifyLogin", "Fail", null));
	    	//tester.closeSession();
	    	throw new NullPointerException();
	    }	
	}
	
	@When("^the user enters a valid p@\\$\\$w(\\d+)rd$")
	public void the_user_enters_a_valid_p_$$w_rd(int arg1) throws Throwable {
		try {
			driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
			driver.findElement(By.name("password")).sendKeys(props.getProperty("verifyLogin.password"));
		}
	    catch(Exception e) {
	    	//tester.insertTestData(new P2TestAnn("verifyLogin", "Fail", null));
	    	//tester.closeSession();
	    	throw new NullPointerException();
	    }
	}

	@When("^the user clicks the login button$")
	public void the_user_clicks_the_login_button() throws Throwable {
		try {
			System.out.println("Clicking login button");
			driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
			driver.findElement(By.name("submit")).click();
		}
	    catch(Exception e) {
	    	//tester.insertTestData(new P2TestAnn("verifyLogin", "Fail", null));
	    	//tester.closeSession();
	    	throw new NullPointerException();
	    }		
	}

	@Then("^the user arrives at the home page$")
	public void the_user_arrives_at_the_home_page() throws Throwable {
		System.out.println("Arrived at home page");
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		tester.update_test_data(currTest.getTid(), "Pass");
	}
	
	
	//EXPORT CSV*************************************
	@Given("^the user is in the overview page$")
	public void the_user_is_in_the_overview_page() throws Throwable {
		currTest = new P2TestAnn("verifyExportCSV", "Fail", null);
	    tester.insertTestData(currTest);
		while(ExpectedConditions.elementToBeClickable(By.xpath("//*[@id=\"mat-tab-label-0-0\"]")) == null) {
			
		}
		try {
			driver.findElement(By.xpath("//*[@id=\"mat-tab-label-0-0\"]")).click();
		}
		catch(Exception e) {
			throw new NullPointerException();
		}
	}

	@When("^the user clicks the export button$")
	public void the_user_clicks_the_export_button() throws Throwable {
		System.out.println("Clicking export button");
		while(ExpectedConditions.elementToBeClickable(By.xpath("//*[@id=\\\"mat-expansion-panel-header-0\\\"]/span/mat-panel-description/mat-icon[1]")) == null) {
            
        }
		
		try {
	        driver.findElement(By.xpath("//*[@id=\"mat-expansion-panel-header-0\"]/span/mat-panel-description/mat-icon[1]")).click();

		}
		catch(Exception e) {
			throw new NullPointerException();
		}
	}

	@Then("^the user receives a CSV file$")
	public void the_user_receives_a_CSV_file() throws Throwable {
		tester.update_test_data(currTest.getTid(), "Pass");
	}
	//**********************************************************
	
	//LOGOUT****************************************************
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
	//**********************************************************
	
	
	
}