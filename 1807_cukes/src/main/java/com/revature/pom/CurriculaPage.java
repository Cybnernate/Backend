package com.revature.pom;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class CurriculaPage {

	private static WebElement element;

	public static WebElement curriculaTab (WebDriver driver) {
		element = driver.findElement(By.cssSelector("#mat-tab-label-0-3"));
		return element;
	}

	public static WebElement addFocusButton (WebDriver driver) {
		element = driver.findElement(By.cssSelector("#mat-expansion-panel-header-20 > span.mat-content > mat-panel-description > button > span > mat-icon"));
		return element;
	}

	public static WebElement nameInput(WebDriver driver) {
		element = driver.findElement(By.cssSelector("#mat-input-8"));
		return element;
	}

	public static WebElement skillDropDown (WebDriver driver) {
		element = driver.findElement(By.cssSelector("#mat-select-10 > div"));
		return element;
	}

	public static WebElement skillOption (WebDriver driver) {
		element = driver.findElement(By.cssSelector("#mat-option-249 > mat-pseudo-checkbox"));
		return element;
	}

	public static WebElement addNewFocusButton (WebDriver driver) {
		element = driver.findElement(By.cssSelector("#mat-dialog-0 > app-add-focus > div.mat-dialog-actions > button.add-focus-button.mat-button"));
		return element;
	}

	public static WebElement addSkillButton (WebDriver driver) {
		element = driver.findElement(By.cssSelector(""));
		return element;
	}

	public static WebElement newSkillName (WebDriver driver) {
		element = driver.findElement(By.cssSelector("#mat-input-9"));
		return element;
	}

	public static WebElement addNewSkill (WebDriver driver) {
		element = driver.findElement(By.cssSelector("#mat-dialog-1 > app-add-skill > div.mat-dialog-actions > button.add-skill-button.mat-button"));
		return element;
	}
}
