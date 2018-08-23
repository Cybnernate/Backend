Feature: User can click the overview page after logging in

Background:
	Given the application is opened 
	When valid username and password are entered
	And the user clicks login button  
	Then the user is in AssignForce
	
Scenario:
	Given the user is logged in
	When the user clicks on Overview tab
	Then the user goes to the overview
