Feature: The user is able to download CSV document

Background:
	Given the application is opened 
	When valid username and password are entered
	And the user clicks login button  
	Then the user is in AssignForce

Scenario: The user is able to download CSV document
	Given the user is on the overview page
	When the user clicks the export button
	Then the document is downloaded 
	
