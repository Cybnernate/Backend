Feature: The user is able to use drop down

Background:
	Given the application is opened
	When valid username and password are entered
	And the user clicks login button
	Then the user is in AssignForce

Scenario: The user is able to use drop down
	Given the user is on the locations page
	When the user clicks the reston drop down
	Then the locations are opened
