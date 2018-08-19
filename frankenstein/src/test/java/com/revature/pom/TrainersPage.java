package com.revature.pom;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class TrainersPage {
	
	private static WebElement element;
	
	//add trainer *************************************
	public static WebElement addTrainer (WebDriver wd) {
		element = wd.findElement(By.xpath("//*[@id=\"trainersDiv\"]/mat-toolbar-row[1]/mat-toolbar/button"));
		return element;
	}
	
	public static WebElement trainerFirstName (WebDriver wd) {
		element = wd.findElement(By.xpath("//*[@id=\"mat-input-2\"]"));
		return element;
	}
	
	public static WebElement trainerLastName (WebDriver wd) {
		element = wd.findElement(By.xpath(""));
		return element;
	}
	
	public static WebElement trainerEmail (WebDriver wd) {
		element = wd.findElement(By.xpath("//*[@id=\"mat-input-4\"]"));
		return element;
	}
	
	public static WebElement trainerSkill (WebDriver wd) {
		element = wd.findElement(By.xpath("//*[@id=\"mat-checkbox-3\"]/label/div"));
		return element;
	}
	
	public static WebElement trainerAddButton (WebDriver wd) {
		element = wd.findElement(By.xpath("//*[@id=\"mat-dialog-0\"]/app-trainers-add/form/div[2]/button[1]"));
		return element;
	}
	//*************************************************
	
	//delete a trainer*********************************
	public static WebElement deleteTrainer (WebDriver wd) {
		element = wd.findElement(By.xpath("//*[@id=\"trainersDiv\"]/mat-card[2]/mat-card-content/div[33]/mat-list/app-trainer-item/mat-list-item/div/button"));
		return element;
	}
	//*************************************************
	
	//download resume**********************************
	public static WebElement downloadResume (WebDriver wd) {
		element = wd.findElement(By.xpath("//*[@id=\"trainersDiv\"]/mat-card[1]/mat-card-content/div[1]/mat-list/app-trainer-item/mat-list-item/div/button[1]"));
		return element;
	}
	//*************************************************

}
