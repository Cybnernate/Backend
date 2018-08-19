package com.revature.pom;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class LocationsPage {
	
	private static WebElement element;
	
	//adding a Location**********************************
	public static WebElement locationName(WebDriver wd) {
		element = wd.findElement(By.xpath("//*[@id=\"mat-input-0\"]"));
		return element;
		
	}
	
	public static WebElement cityName(WebDriver wd) {
		element = wd.findElement(By.xpath("//*[@id=\"mat-input-1\"]"));
		return element;
		
	}
	
	public static WebElement stateName(WebDriver wd) {
		element = wd.findElement(By.xpath("//*[@id=\"mat-input-2\"]"));
		return element;
		
	}
	
	public static WebElement buildingLocation (WebDriver wd) {
		element = wd.findElement(By.xpath("//*[@id=\"mat-input-6\"]"));
		return element;
	}
	
	public static WebElement addLocationButton(WebDriver wd) {
		element = wd.findElement(By.xpath("//*[@id=\"mat-dialog-0\"]/app-location-add-dialog/div[2]/button[1]"));
		return element;
	}
	
	public static WebElement canceladdLocationButton(WebDriver wd) {
		element = wd.findElement(By.xpath("//*[@id=\\\"mat-dialog-0\\\"]/app-location-add-dialog/div[2]/button[2]"));
		return element;
	}
	//****************************************************
	
	//adding a building***********************************
	public static WebElement addingBuilding(WebDriver wd) {
		element = wd.findElement(By.xpath("//*[@id=\\\"mat-expansion-panel-header-2\\\"]/span[1]/mat-panel-description/mat-icon[1]"));
		return element;
	}
	
	public static WebElement addBuildingLocation(WebDriver wd) {
		element = wd.findElement(By.xpath("//*[@id=\\\"mat-input-6\\\"]"));
		return element;
	}
	
	public static WebElement addBuildingLocationButton (WebDriver wd) {
		element = wd.findElement(By.xpath("//*[@id=\"mat-dialog-2\"]/app-location-add-dialog/div[2]/button[1]"));
		return element;
	}
	
	public static WebElement cancelAddingBuildingLocation (WebDriver wd) {
		element = wd.findElement(By.xpath("//*[@id=\"mat-dialog-2\"]/app-location-add-dialog/div[2]/button[2]"));
		return element;
	}
	//****************************************************
	
	//edit capital one************************************
	public static WebElement editCapitalOneButton (WebDriver wd) {
		element = wd.findElement(By.xpath("//*[@id=\"mat-expansion-panel-header-70\"]/span[1]/mat-panel-description/mat-icon[3]"));
		return element;
	}
	
	public static WebElement editCity (WebDriver wd) {
		element = wd.findElement(By.xpath("//*[@id=\"mat-input-34\"]"));
		return element;
	}
	
	public static WebElement editState (WebDriver wd) {
		element = wd.findElement(By.xpath("//*[@id=\"mat-input-35\"]"));
		return element;	
	}
	
	public static WebElement addEditCaptialOne (WebDriver wd) {
		element = wd.findElement(By.xpath(""));
		return element;
	}
	
	public static WebElement cancelAddEditCapitalOne (WebDriver wd) {
		element = wd.findElement(By.xpath(""));
		return element;
	}
	//**************************************************
	
	//edit room*****************************************
	public static WebElement editRoom(WebDriver wd) {
		element = wd.findElement(By.xpath("//*[@id=\"mat-expansion-panel-header-20\"]/span[2]"));
		return element;
	}
	
	public static WebElement editRoomButton (WebDriver wd) {
		element = wd.findElement(By.xpath("//*[@id=\"cdk-accordion-child-28\"]/div/div/mat-list[6]/mat-list-item/div/mat-icon[2]"));
		return element;
	}
	
	public static WebElement newRoomName (WebDriver wd) {
		element = wd.findElement(By.xpath("//*[@id=\"mat-input-6\"]"));
		return element;
	}
	
	public static WebElement updateRoomName (WebDriver wd) {
		element = wd.findElement(By.xpath("//*[@id=\"mat-dialog-2\"]/app-location-edit-room-dialog/div[2]/button[1]"));
		return element;
	}
	//**************************************************
	
	//remove room *************************************
	public static WebElement removeRoom (WebDriver wd) {
		element = wd.findElement(By.xpath("//*[@id=\"cdk-accordion-child-28\"]/div/div/mat-list[8]/mat-list-item/div/mat-icon[1]"));
		return element;
	}
	//*************************************************	
}