Feature: The user is able to delete a trainer

Background:
	Given the application is opened
	When valid username and password are entered
	And the user clicks login button
	Then the user is in AssignForce

Scenario: The user is able to delete a trainer
	Given the user is on the trainer page
	When the user clicks the delete trainer button
	Then the trainer is deleted
