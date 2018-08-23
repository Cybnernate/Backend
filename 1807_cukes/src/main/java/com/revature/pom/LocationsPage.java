package com.revature.pom;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class LocationsPage {
	
	private static WebElement element;
	
	public static WebElement locationsTab(WebDriver driver) {
		element = driver.findElement(By.cssSelector("#mat-tab-label-0-2"));
		return element;
	}
	
	public static WebElement editCapitalButton (WebDriver driver) {
		element = driver.findElement(By.cssSelector("#mat-expansion-panel-header-30 > span.mat-content > mat-panel-description > mat-icon:nth-child(4)"));
		return element;
	}
	
	public static WebElement capitalCity (WebDriver driver) {
		element = driver.findElement(By.cssSelector("#mat-input-12"));
		return element;
	}
	
	public static WebElement capitalState (WebDriver driver) {
		element = driver.findElement(By.cssSelector("#mat-input-13"));
		return element;
	}
	
	public static WebElement capitalUpdate (WebDriver driver) {
		element = driver.findElement(By.cssSelector("#mat-dialog-1 > app-location-edit-location-dialog > div.mat-dialog-actions > button:nth-child(1)"));
		return element;
	}
	
	public static WebElement restonDropDown (WebDriver driver) {
		element = driver.findElement(By.cssSelector("#mat-expansion-panel-header-23 > span.mat-expansion-indicator.ng-tns-c20-102.ng-trigger.ng-trigger-indicatorRotate.ng-star-inserted"));
		return element;
	}
}
