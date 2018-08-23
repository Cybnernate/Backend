package com.revature.pom;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class TrainerPage {
	
	private static WebElement element;
	
	
	public static WebElement trainerTab (WebDriver driver) {
		element = driver.findElement(By.cssSelector("#mat-tab-label-0-4"));
		return element;
	}
	
	public static WebElement deleteTrainer (WebDriver driver) {
		element = driver.findElement(By.cssSelector("#trainersDiv > mat-card:nth-child(2) > mat-card-content > div:nth-child(118) > mat-list > app-trainer-item > mat-list-item > div > button.mat-icon-button.ng-star-inserted > span > mat-icon"));
		return element;
	}
	
	public static WebElement downloadResume (WebDriver driver) {
		element = driver.findElement(By.cssSelector("#trainersDiv > mat-card:nth-child(2) > mat-card-content > div:nth-child(1) > mat-list > app-trainer-item > mat-list-item > div > button:nth-child(5) > span > mat-icon"));
		return element;
	}

}
