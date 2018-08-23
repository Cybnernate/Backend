Feature: The user is able to download trainer resume

Background:
	Given the application is opened
	When valid username and password are entered
	And the user clicks login button
	Then the user is in AssignForce

Scenario: The user is able to download trainer resume
	Given the user is on the trainer page
	When the user clicks the download resume button
	Then the resume is downloaded 
