Feature: The user is able to edit Capital One

Background:
	Given the application is opened 
	When valid username and password are entered
	And the user clicks login button  
	Then the user is in AssignForce

Scenario: The user is able to edit Capital One
	Given the user is on the locations page
	When the user clicks the edit button
	And the user clicks the city input
	And the user clicks the state input
	And the user clicks the update capital button
	Then capital one is updated