package com.revature.pom;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class OverviewPage {
	
	private static WebElement element;
	
	public static WebElement overviewTab (WebDriver driver) {
		element = driver.findElement(By.cssSelector("#mat-tab-label-0-0"));
		return element;
	}
	
	public static WebElement exportCSVButton (WebDriver driver) {
		element = driver.findElement(By.cssSelector("#mat-expansion-panel-header-0 > span > mat-panel-description > mat-icon:nth-child(2)"));
		return element;
	}
		
	public static WebElement menuButton (WebDriver driver) {
		element = driver.findElement(By.cssSelector("#mat-expansion-panel-header-1 > span > mat-panel-description > mat-icon:nth-child(3)"));
		return element;
	}
	
	public static WebElement inProgressButton (WebDriver driver) {
		element = driver.findElement(By.cssSelector("#cdk-overlay-0 > div > div > button:nth-child(2)"));
		return element;
	}
	
	public static WebElement twoWeeksButton (WebDriver driver) {
		element = driver.findElement(By.cssSelector("#cdk-overlay-0 > div > div > button:nth-child(3)"));
		return element;
	}
	
	
	

}
