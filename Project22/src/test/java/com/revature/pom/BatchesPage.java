package com.revature.pom;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.annotations.Test;

public class BatchesPage {

	public static void currentBatches(WebDriver wd) {

		WebDriverWait wait = new WebDriverWait(wd, 50);

		// click hide batchless trainer
		wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//*[@id=\"hidebatchless\"]")));
		wd.findElement(By.xpath("//*[@id=\"hidebatchless\"]")).click();

		// click hide inactive trainers
		wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//*[@id=\"hideinactive\"]")));
		wd.findElement(By.xpath("//*[@id=\"hideinactive\"]")).click();

		// click hide concluded batches
		wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//*[@id=\"hideconcluded\"]")));
		wd.findElement(By.xpath("//*[@id=\"hideconcluded\"]")).click();
	}

	public static void createEditCollapse(WebDriver wd) {

		WebDriverWait wait = new WebDriverWait(wd, 15);

		wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//*[@id=\"mat-expansion-panel-header-3\"]")));
		wd.findElement(By.xpath("//*[@id=\"mat-expansion-panel-header-3\"]"));

		wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//*[@id=\"mat-expansion-panel-header-1\"]")));
		wd.findElement(By.xpath("//*[@id=\"mat-expansion-panel-header-1\"]"));
	}

	public static void editBatch(WebDriver wd) {

		WebDriverWait wait = new WebDriverWait(wd, 55);

		// click first checkbox
		wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//*[@id=\"checkcell\"]")));
		wd.findElement(By.xpath("//*[@id=\"checkcell\"]")).click();
		System.out.println("checkbox");

		// click edit button
		wait.until(ExpectedConditions.presenceOfElementLocated(
				By.xpath("//*[@id=\"cdk-accordion-child-1\"]/div/div/mat-table/mat-row[1]/mat-cell[10]/button[1]")));
		wd.findElement(
				By.xpath("//*[@id=\"cdk-accordion-child-1\"]/div/div/mat-table/mat-row[1]/mat-cell[10]/button[1]"))
				.click();
		System.out.println("edit");

//		//clicks delete
//		wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//*[@id=\"cdk-accordion-child-1\"]/div/div/mat-table/mat-row[1]/mat-cell[10]/button[2]")));
//		wd.findElement(By.xpath("//*[@id=\"cdk-accordion-child-1\"]/div/div/mat-table/mat-row[1]/mat-cell[10]/button[2]")).click();
//		System.out.println("delete");

		// clicks cancel button
//		wait.until(ExpectedConditions
//				.presenceOfElementLocated(By.xpath("//*[@id=\"cdk-accordion-child-3\"]/div/form/div[5]/button[2]")));
//		wd.findElement(By.xpath("//*[@id=\"cdk-accordion-child-3\"]/div/form/div[5]/button[2]")).click();
//		System.out.println("cancel");

//		// clicks submit button
////		wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//*[@id="cdk-accordion-child-3"]/div/form/div[5]/button[1]")));
////		wd.findElement(By.xpath("//*[@id="cdk-accordion-child-3"]/div/form/div[5]/button[1]"));
////		System.out.println("submit button");

	}

	public static void verifyCreateBatch(WebDriver wd) {

		Actions actions = new Actions(wd);

		// clicks ciriculum drop down
		
		while(ExpectedConditions.elementToBeClickable(By.xpath("//*[@id=\"mat-select-3\"]")) == null) {
			
		}
		wd.findElement(By.xpath("//*[@id=\"mat-select-3\"]")).click();
		System.out.println("ciric");

		// clicks .NET option
		while(ExpectedConditions.elementToBeClickable(By.id("mat-option-0")) == null) {
			
		}
		actions.moveToElement(wd.findElement(By.id("mat-option-0"))).click().perform();
		System.out.println(".NET");

		// clicks start date pop up
		while(ExpectedConditions.elementToBeClickable(By.xpath("//*[@id=\"cdk-accordion-child-3\"]/div/form/div[2]/mat-form-field[1]/div/div[1]/div[1]/mat-datepicker-toggle/button")) == null){
			
		}
		System.out.println("hello");
		wd.findElement(By.xpath("//*[@id=\"cdk-accordion-child-3\"]/div/form/div[2]/mat-form-field[1]/div/div[1]/div[1]/mat-datepicker-toggle/button")).click();
		System.out.println("heellow23");
//		wait.until(ExpectedConditions.elementToBeClickable((By.xpath(
//				"//[@id=\"cdk-accordion-child-3\"]/div/form/div[2]/mat-form-field[1]/div/div[1]/div[1]/mat-datepicker-toggle/button"))));
//		
//		actions.moveToElement(wd.findElement(By.xpath(
//				"//*[@id=\"cdk-accordion-child-3\"]/div/form/div[2]/mat-form-field[1]/div/div[1]/div[1]/mat-datepicker-toggle/button")))
//				.click().perform();
		
		System.out.println("calendar");

		// clicks august 28th box
//		wd.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
		while (ExpectedConditions.elementToBeClickable(By.xpath("//*[@id=\"mat-datepicker-2\"]/div[2]/mat-month-view/table/tbody/tr[5]/td[3]/div")) == null) {
			
		}
		actions.moveToElement(wd.findElement(By.xpath("//*[@id=\"mat-datepicker-2\"]/div[2]/mat-month-view/table/tbody/tr[5]/td[3]/div")))
				.click().perform();

		// clicks the trainer
//		wd.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
		while (ExpectedConditions.elementToBeClickable(	By.xpath("//*[@id=\"cdk-accordion-child-3\"]/div/form/div[3]/mat-form-field[1]")) == null) {
			
		}
		wd.findElement(By.xpath("//*[@id=\"cdk-accordion-child-3\"]/div/form/div[3]/mat-form-field[1]")).click();
		System.out.println("trainer");

		// clicks on william
//		wd.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
		while (ExpectedConditions.elementToBeClickable(By.id("mat-option-167")) == null) {
			//*[@id="mat-option-167"]
		}
		wd.findElement(By.id("mat-option-167")).click();
		System.out.println("william");

		// clicks on co trainer
//		wd.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
		while (ExpectedConditions.elementToBeClickable(By.id("mat-select-6")) == null) {
			
		}
		wd.findElement(By.id("mat-select-6")).click();
		System.out.println("cotrainer");

		// clicks on august
//		wd.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
		while (ExpectedConditions.elementToBeClickable(By.id("mat-option-25")) == null) {
			
		}
		wd.findElement(By.id("mat-option-25")).click();
		System.out.println("august");

		// clicks on location
//		wd.manage().timeouts().implicitlyWait(17, TimeUnit.SECONDS);
		while (ExpectedConditions.elementToBeClickable(By.xpath("//*[@id=\"mat-select-7\"]")) == null) {
			
		}
		wd.findElement(By.xpath("//*[@id=\"mat-select-7\"]")).click();
		System.out.println("location");

		// clicks on HQ
//		wd.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		while(ExpectedConditions.elementToBeClickable(By.xpath("//*[@id=\"mat-option-13\"]")) == null ) {
			
		}
		wd.findElement(By.xpath("//*[@id=\"mat-option-13\"]")).click();
		System.out.println("HQ");

		// clicks on building
//		wd.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		while(ExpectedConditions.elementToBeClickable(By.xpath("//*[@id=\"mat-select-8\"]")) == null) {
			
		}
		wd.findElement(By.xpath("//*[@id=\"mat-select-8\"]")).click();
		System.out.println("building");

		// clicks on building number
//		wd.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
		while(ExpectedConditions.elementToBeClickable(By.xpath("//*[@id=\"mat-option-186\"]")) == null) {
			
		}
		wd.findElement(By.xpath("//*[@id=\"mat-option-186\"]")).click();
		System.out.println("building number");

		// clicks on room
//		wd.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
		while(ExpectedConditions.elementToBeClickable(By.xpath("//*[@id=\"mat-select-9\"]")) == null) {
			
		}
		wd.findElement(By.xpath("//*[@id=\"mat-select-9\"]")).click();
		System.out.println("room");

		// clicks on room number
//		wd.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);)
		while(ExpectedConditions.elementToBeClickable(By.xpath("//*[@id=\"mat-option-56\"]")) == null) {
			
		}
		wd.findElement(By.xpath("//*[@id=\"mat-option-56\"]")).click();
		System.out.println("room number");

//		// clicks submit button
//		wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//*[@id=\"cdk-accordion-child-3\"]/div/form/div[5]/button[1]")));
//		wd.findElement(By.xpath("//*[@id=\"cdk-accordion-child-3\"]/div/form/div[5]/button[1]"));
//		System.out.println("submit button");
	}
}