package com.revature.pom;

import static org.testng.Assert.expectThrows;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class LocationsPage {

	private static WebElement element;

	public static WebElement locationsTab(WebDriver driver) {
		WebDriverWait wait = new WebDriverWait(driver,15);
		element = wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@id=\"mat-tab-label-0-2\"]")));
		return element;
	}

	public static WebElement editCapitalButton (WebDriver driver) {
		WebDriverWait wait = new WebDriverWait(driver,15);
		element = wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@id=\"mat-expansion-panel-header-9\"]/span[1]/mat-panel-description/mat-icon[3]")));
		return element;
	}

	public static WebElement capitalCity (WebDriver driver) {
		WebDriverWait wait = new WebDriverWait(driver,15);
		element = wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@id=\"mat-input-1\"]")));
		return element;
	}

	public static WebElement capitalState (WebDriver driver) {
		WebDriverWait wait = new WebDriverWait(driver,15);
		element = wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@id=\"mat-input-2\"]")));
		return element;
	}

	public static WebElement capitalUpdate (WebDriver driver) {
		WebDriverWait wait = new WebDriverWait(driver,15);
		element = wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@id=\"mat-dialog-0\"]/app-location-edit-location-dialog/div[2]/button[1]/span")));
		return element;
	}

	public static WebElement restonDropDown (WebDriver driver) {
		WebDriverWait wait = new WebDriverWait(driver,15);
		element = wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@id=\"mat-expansion-panel-header-2\"]/span[2]")));
		return element;
	}
}
