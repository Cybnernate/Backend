package com.revature.pom;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class CurriculaPage {
	
	private static WebElement element;
	
	//adding focus***********************************
	public static WebElement addFocus(WebDriver wd) {
		element = wd.findElement(By.xpath("//*[@id=\"mat-expansion-panel-header-2\"]/span[1]/mat-panel-description/button"));
		return element;
	}
	
	public static WebElement focusName(WebDriver wd) {
		element = wd.findElement(By.xpath("//*[@id=\"mat-input-0\"]"));
		return element;
	}
	
	public static WebElement dropDownSkill(WebDriver wd) {
		element = wd.findElement(By.xpath("//*[@id=\"mat-select-0\"]/div"));
		return element;
	}
	
	public static WebElement pickSkill(WebDriver wd) {
		element = wd.findElement(By.xpath("//*[@id=\"mat-option-0\"]/mat-pseudo-checkbox"));
		return element;
	}
	
	public static WebElement outOfDrop (WebDriver wd) {
		element = wd.findElement(By.xpath("//*[@id=\"mat-dialog-0\"]"));
		return element;
	}
	
	public static WebElement addFocusButton (WebDriver wd) {
		element = wd.findElement(By.xpath("//*[@id=\"mat-dialog-0\"]/app-add-focus/div[2]/button[2]"));
		return element;
	}
	//****************************************************
	
	//edit new focus *************************************
	public static WebElement editNewFocus (WebDriver wd) {
		element = wd.findElement(By.xpath("//*[@id=\"cdk-accordion-child-2\"]/div/div/mat-list/div[17]/mat-list-item/div/button[1]"));
		return element;
	}
	
	public static WebElement newFocusName (WebDriver wd) {
		element = wd.findElement(By.xpath("//*[@id=\"mat-dialog-1\"]/app-edit-focus/div[1]/div[1]/mat-form-field/div/div[1]/div/input"));
		return element;
	}
	
	public static WebElement newDrop (WebDriver wd) {
		element = wd.findElement(By.xpath("//*[@id=\"mat-dialog-1\"]/app-edit-focus/div[1]/div[2]/mat-form-field/div/div[1]/div/mat-select/div/div[2]/div"));
		return element;
	}
	
	public static WebElement addNewFocusEdit (WebDriver wd) {
		element = wd.findElement(By.xpath("//*[@id=\"mat-dialog-3\"]/app-edit-focus/div[2]/button[2]"));
		return element;
	}
	//***************************************************
	
	//delete focus***************************************
	public static WebElement deleteFocus (WebDriver wd) {
		element = wd.findElement(By.xpath("//*[@id=\"cdk-accordion-child-2\"]/div/div/mat-list/div[17]/mat-list-item/div/button[2]"));
		return element;
	}
	//***************************************************
	
	//add a skill****************************************
	public static WebElement addSkill(WebDriver wd) {
		element = wd.findElement(By.xpath("//*[@id=\"mat-expansion-panel-header-3\"]/span[1]/mat-panel-description/button"));
		return element;
	}
	
	public static WebElement skillName (WebDriver wd) {
		element = wd.findElement(By.xpath("//*[@id=\"mat-input-4\"]"));
		return element;
	}
	
	public static WebElement addSkillName (WebDriver wd) {
		element = wd.findElement(By.xpath("//*[@id=\"mat-dialog-4\"]/app-add-skill/div[2]/button[2]"));
		return element;
	}
	//***************************************************
	
	//edit skill*****************************************
	public static WebElement editSkillName (WebDriver wd) {
		element = wd.findElement(By.xpath("//*[@id=\"cdk-accordion-child-3\"]/div/div/mat-list/mat-list-item[42]/div/button[1]"));
		return element;
	}
	
	public static WebElement editSkillNameInput (WebDriver wd) {
		element = wd.findElement(By.xpath("//*[@id=\"mat-input-9\"]"));
		return element;
	}
	
	public static WebElement editSubmit (WebDriver wd) {
		element = wd.findElement(By.xpath("//*[@id=\"mat-dialog-9\"]/app-edit-skill/div[2]/button[2]"));
		return element;
	}
	//***************************************************
	
	//delete skill***************************************
	public static WebElement deleteSubmit (WebDriver wd) {
		element = wd.findElement(By.xpath("//*[@id=\"cdk-accordion-child-3\"]/div/div/mat-list/mat-list-item[42]/div/button[2]"));
		return element;
	}
	//***************************************************
}