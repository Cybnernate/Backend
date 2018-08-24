package com.revature.pom;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class TrainerPage {

	private static WebElement element;


	public static WebElement trainerTab (WebDriver driver) {
		WebDriverWait wait = new WebDriverWait(driver,15);
		element = wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@id=\"mat-tab-label-0-4\"]")));
		return element;
	}

	public static WebElement deleteTrainer (WebDriver driver) {
		WebDriverWait wait = new WebDriverWait(driver,15);
		//element = wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@id=\"trainersDiv\"]/mat-card[1]/mat-card-content/div[82]/mat-list/app-trainer-item/mat-list-item/div/button[2]/span/mat-icon")));
		element = wait.until(ExpectedConditions.elementToBeClickable(By.cssSelector("#trainersDiv > mat-card:nth-child(2) > mat-card-content > div:nth-child(83) > mat-list > app-trainer-item > mat-list-item > div > button.mat-icon-button.ng-star-inserted")));

		return element;
	}

	public static WebElement downloadResume (WebDriver driver) {
		WebDriverWait wait = new WebDriverWait(driver,15);
		element = wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@id=\"trainersDiv\"]/mat-card[1]/mat-card-content/div[1]/mat-list/app-trainer-item/mat-list-item/div/button[1]/span/mat-icon")));
		return element;
	}

}
