package com.revature.pom;

import java.io.File;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.annotations.Test;

public class Driver2 {

	static WebDriver wd;

	void launchApplication() {
		File chrome = new File("src/main/resources/chromedriver.exe");
		System.setProperty("webdriver.chrome.driver", chrome.getAbsolutePath());
		wd = new ChromeDriver();
		wd.get("https://assignforce-client.cfapps.io");
	}

	@Test (priority = 7)
	void logout() {
		wd.findElement(By.xpath("//*[@id=\"logoutBTN\"]")).click();
		System.out.println("foundit 4");
		wd.close();
		wd.quit();
	}
	@Test(priority = 0)
	public void verifyValidLogin() {
		launchApplication();
//		if (wd.findElement(By.xpath("//*[@id=\"auth0-lock-container-1\"]/div/div[2]/form/div")).isDisplayed()) {
			LoginPage.user(wd).sendKeys("svp@revature.com");
			LoginPage.pass(wd).sendKeys("p@$$w0rd");
			LoginPage.submit(wd).click();
			
//		}
	}
//	@Test(priority = 1)
//	public void verifyBatchesPage() {
//		// clicks batches column
//		wd.findElement(By.xpath("//*[@id=\"mat-tab-label-0-1\"]")).click();
//		System.out.println("batches");
//		
//	//	WebDriverWait wait = new WebDriverWait(wd,10);
//		
////		BatchesPage.currentBatches(wd);
////		BatchesPage.editBatch(wd);
////		BatchesPage.createEditCollapse(wd);
//		BatchesPage.verifyCreateBatch(wd);
//	}
}








//@Test (priority = 3) 
//public void verifyOverviewPage () {
//	
//	//wd.findElement(By.xpath("//*[@id=\"mat-tab-label-0-0\"]")).click();
//
//	//export CSV***********************************
//	wd.manage().timeouts().implicitlyWait(27, TimeUnit.SECONDS);
//	OverviewPage.exportToCSV(wd);
//	//*********************************************
//	
////	//in progress batches**************************
////	OverviewPage.menu(wd).click();
////	if(wd.findElement(By.xpath("//*[@id=\"cdk-overlay-31\"]/div")).isDisplayed()) {
////		OverviewPage.inProgres(wd).click();
////	}
////	//*********************************************
////	
////	//two weeks ***********************************
////	OverviewPage.menu(wd).click();
////	if(wd.findElement(By.xpath("//*[@id=\"cdk-overlay-31\"]/div")).isDisplayed()) {
////		OverviewPage.twoWeeks(wd).click();
////	}
//}

//@Test (priority = 2)
//public void verifyTrainersPage () {
//	
//	//clicks the trainers column
//	wd.findElement(By.xpath("//*[@id=\"mat-tab-label-0-4\"]")).click();
//	WebDriverWait wait = new WebDriverWait(wd, 50);
//	
//	
//	//add trainer*****************************************
////	TrainersPage.addTrainer(wd).click();
////	
////	if(wd.findElement(By.xpath("//*[@id=\"mat-dialog-2\"]")).isDisplayed()) {
////		TrainersPage.trainerFirstName(wd).sendKeys("Brian");
////		TrainersPage.trainerLastName(wd).sendKeys("Maguire");
////		TrainersPage.trainerEmail(wd).sendKeys("brianmaguire39@gmail.com");
////		TrainersPage.trainerSkill(wd).click();
////		TrainersPage.trainerAddButton(wd).click();
////	}
//	//*****************************************************
//	
//	
//	//delete a trainer
//	//TrainersPage.deleteTrainer(wd).click();
//	//*****************************************************
//	
//	//download resume**************************************
//	
//	//wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//*[@id=\"trainersDiv\"]/mat-card[1]/mat-card-content/div[1]/mat-list/app-trainer-item/mat-list-item/div/button[1]")));
//	wd.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
//	
//	System.out.println("yo");
//	TrainersPage.downloadResume(wd).click();
//	System.out.println("yoyo");
//	//*****************************************************
//	
//	
//}




//@Test(priority = 3)
//public void verifyCurriculaPage() {
//	
//	//clicks the curricula page
//	wd.findElement(By.xpath("//*[@id=\"mat-tab-label-0-3\"]")).click();
//	
//	//adding new Focus ************************************
//	//clicks the add focus button
//	CurriculaPage.addFocus(wd).click();
//	
//	if(wd.findElement(By.xpath("//*[@id=\"mat-dialog-0\"]")).isDisplayed()) {
//		CurriculaPage.focusName(wd).sendKeys("Expert");
//		CurriculaPage.dropDownSkill(wd).click();
//		CurriculaPage.pickSkill(wd).click();
//		CurriculaPage.outOfDrop(wd).click();
//		CurriculaPage.addFocusButton(wd).click();
//	}
//	//*****************************************************
//	
//	
//	//edit new focus***************************************
//	CurriculaPage.editNewFocus(wd).click();
//	CurriculaPage.newFocusName(wd).sendKeys("Beginner");;
//	CurriculaPage.newDrop(wd).click();
//	CurriculaPage.addNewFocusEdit(wd).click();
//	//*****************************************************
//	
//	//delete focus*****************************************
//	CurriculaPage.deleteFocus(wd).click();
//	//*****************************************************
//	
//	//add a skill******************************************
//	CurriculaPage.addSkill(wd).click();
//	if(wd.findElement(By.xpath("//*[@id=\"mat-dialog-4\"]")).isDisplayed()) {
//		CurriculaPage.skillName(wd).sendKeys("Writing");
//		CurriculaPage.addSkillName(wd).click();
//	}
//	//*****************************************************
//	
//	//edit skill*******************************************
//	CurriculaPage.editSkillName(wd).click();
//	CurriculaPage.editSkillNameInput(wd).sendKeys(" and Reading");
//	CurriculaPage.editSubmit(wd).click();
//	//*****************************************************
//	
//	//delete skill*****************************************
//	CurriculaPage.deleteSubmit(wd).click();
//	//*****************************************************
//}











//	@Test (priority = 2)
//	public void verifyLocationsPage () {
//		//clicks on location tag
//		wd.findElement(By.xpath("//*[@id=\"mat-tab-label-0-2\"]")).click();
//		
//		WebDriverWait wait = new WebDriverWait(wd, 25);
//		
//		//click on add a Location *************************************
//		wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//*[@id=\"mat-expansion-panel-header-1\"]/span[1]/mat-panel-description/mat-icon")));
//		wd.findElement(By.xpath("//*[@id=\"mat-expansion-panel-header-1\"]/span[1]/mat-panel-description/mat-icon")).click();
//		
//		if(wd.findElement(By.xpath("//*[@id=\"mat-dialog-10\"]")).isDisplayed()) {
//			//enters user information
//			LocationsPage.locationName(wd).sendKeys("MyLocations");
//			LocationsPage.cityName(wd).sendKeys("Guilford");
//			LocationsPage.stateName(wd).sendKeys("Connecticut");
//			//clicks add button
//			LocationsPage.addLocationButton(wd).click();
//			//clicks cancel button
//			//LocationsPage.canceladdLocationButton(wd).click();
//		}
//
//		//*************************************************************
//		
//		//adding a building********************************************
//		LocationsPage.addingBuilding(wd).click();
//		
//		//adding building location
//		LocationsPage.addBuildingLocation(wd).sendKeys("Dulles Greene");
//		
//		//cancel adding building location
//		LocationsPage.addBuildingLocationButton(wd).click();
//		
//		//add button adding building location
//  	    LocationsPage.cancelAddingBuildingLocation(wd).click();
//		//*************************************************************
//		
//		//editing Capital One******************************************
//		LocationsPage.editCapitalOneButton(wd).click();
//		
//		if(wd.findElement(By.xpath("//*[@id=\"mat-dialog-9\"]")).isDisplayed()) {
//			LocationsPage.editCity(wd).sendKeys("Orlando");
//			LocationsPage.editState(wd).sendKeys("FL");
//			//LocationsPage.addEditCaptialOne(wd).click();
//			//LocationsPage.cancelAddEditCapitalOne(wd).click();
//		}
//		//*************************************************************
//		//editing X1 room from HQ**************************************
//		//clicks the drop down HQ
//		LocationsPage.editRoom(wd).click();
//		LocationsPage.editRoomButton(wd).click();
//		if(wd.findElement(By.xpath("//*[@id=\"mat-dialog-2\"]")).isDisplayed()) {
//			LocationsPage.newRoomName(wd).sendKeys("OUR ROOM");
//			LocationsPage.updateRoomName(wd).click();
//		}
//		//*************************************************************
//		
//		//remove room from HQ *****************************************
//		LocationsPage.removeRoom(wd).click();
//		//*************************************************************
//	}
//	

////	
////	@Test(priority = 4)
////	public void verifyTrainersPage() {
////		wd.findElement(By.xpath("//*[@id=\"mat-tab-label-0-4\"]")).click();
////	}
////	
////	@Test(priority = 5) 
////	public void verifyReportsPage() {
////		wd.findElement(By.xpath("//*[@id=\"mat-tab-label-0-5\"]")).click();
////	}
////	
////	@Test(priority = 6)
////	public void verifySettingsPage() {
////		wd.findElement(By.xpath("//*[@id=\"mat-tab-label-0-6\"]")).click();
////	}