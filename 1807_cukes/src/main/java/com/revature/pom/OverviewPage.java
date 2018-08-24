package com.revature.pom;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class OverviewPage {
	
	private static WebElement element;
	
	public static WebElement overviewTab (WebDriver driver) {
		
		WebDriverWait wait = new WebDriverWait(driver,15);
		element = wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@id=\"mat-tab-label-0-0\"]")));
		
		return element;
	}
	
	public static WebElement exportCSVButton (WebDriver driver) {
		WebDriverWait wait = new WebDriverWait(driver,15);
		element = wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@id=\"mat-expansion-panel-header-0\"]/span/mat-panel-description/mat-icon[1]")));
		return element;
	}
		
	public static WebElement menuButton (WebDriver driver) {
		WebDriverWait wait = new WebDriverWait(driver,15);

		element = wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@id=\"mat-expansion-panel-header-48\"]/span/mat-panel-description/mat-icon[2]")));
		return element;
	}
	
	public static WebElement inProgressButton (WebDriver driver) {
		WebDriverWait wait = new WebDriverWait(driver,15);

		element = wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@id=\"cdk-overlay-94\"]/div/div/button[2]")));
		return element;
	}
	
	public static WebElement twoWeeksButton (WebDriver driver) {
		WebDriverWait wait = new WebDriverWait(driver,15);

		element = wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@id=\"cdk-overlay-94\"]/div/div/button[3]")));
		return element;
	}
	
	
	

}
