package com.revature.pom;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class OverviewPage {
	
	private static WebElement element;
	
	//export CSV*********************************************
	public static void exportToCSV (WebDriver wd) {
		wd.findElement(By.xpath("//*[@id=\"mat-expansion-panel-header-0\"]/span/mat-panel-description/mat-icon[1]")).click();
	}
	//*******************************************************
	
	//in progress batches************************************
	public static WebElement menu (WebDriver wd) {
		element = wd.findElement(By.xpath("//*[@id=\"mat-expansion-panel-header-1\"]/span/mat-panel-description/mat-icon[2]"));
		return element;
	}
	
	public static WebElement inProgres (WebDriver wd) {
		element = wd.findElement(By.xpath("//*[@id=\"cdk-overlay-7\"]/div/div/button[2]"));
		return element;
	}
	//*******************************************************
	
	//two weeks**********************************************
	public static WebElement twoWeeks (WebDriver wd) {
		element = wd.findElement(By.xpath("//*[@id=\"cdk-overlay-7\"]/div/div/button[3]"));
		return element;
	}
	//*******************************************************
	
	
	
	
	

}
