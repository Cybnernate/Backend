package com.revature.pom;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class CurriculaPage {

	private static WebElement element;

	public static WebElement curriculaTab (WebDriver driver) {
		WebDriverWait wait = new WebDriverWait(driver,15);
		element = wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@id=\"mat-tab-label-0-3\"]")));
		return element;
		
		
	}

	public static WebElement addFocusButton (WebDriver driver) {
		//element = driver.findElement(By.xpath("//*[@id=\"mat-expansion-panel-header-31\"]/span[1]/mat-panel-description/button/span/mat-icon"));
		WebDriverWait wait = new WebDriverWait(driver,15);
		
		element = wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@id=\"mat-expansion-panel-header-2\"]/span[1]/mat-panel-description/button/span/mat-icon")));
		
		return element;
	}

	public static WebElement nameInput(WebDriver driver) {
		//element = driver.findElement(By.xpath("//*[@id=\"mat-input-13\"]"));
		WebDriverWait wait = new WebDriverWait(driver,15);
		
		return wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@id=\"mat-input-0\"]")));
	}

	public static WebElement skillDropDown (WebDriver driver) {
		//element = driver.findElement(By.xpath("//*[@id=\"mat-select-11\"]/div/div[2]"));
		WebDriverWait wait = new WebDriverWait(driver,15);
		return wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@id=\"mat-select-0\"]/div/div[2]")));
	}

	public static WebElement skillOption (WebDriver driver) {
		WebDriverWait wait = new WebDriverWait(driver,15);
		element = wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@id=\"mat-option-0\"]/mat-pseudo-checkbox")));
		return element;
	}

	public static WebElement addNewFocusButton (WebDriver driver) {
		WebDriverWait wait = new WebDriverWait(driver,15);
		element = wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@id=\"mat-dialog-0\"]/app-add-focus/div[2]/button[2]/span")));
		return element;
	}

	public static WebElement addSkillButton (WebDriver driver) {
		WebDriverWait wait = new WebDriverWait(driver,15);
		element = wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@id=\"mat-expansion-panel-header-3\"]/span[1]/mat-panel-description/button/span/mat-icon")));
		return element;
	}

	public static WebElement newSkillName (WebDriver driver) {
		WebDriverWait wait = new WebDriverWait(driver,15);
		element = wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@id=\"mat-input-0\"]")));
		return element;
	}

	public static WebElement addNewSkill (WebDriver driver) {
		WebDriverWait wait = new WebDriverWait(driver,15);
		element = wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@id=\"mat-input-0\"]")));
		return element;
	}
}
