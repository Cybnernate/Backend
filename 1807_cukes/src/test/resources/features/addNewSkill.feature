Feature: The user is able to add a skill

Background:
	Given the application is opened
	When valid username and password are entered
	And the user clicks login button
	Then the user is in AssignForce

	Scenario: The user is able to add a skill
	Given the user is on the curricula page
	When the user clicks the skill button
	And the user enters skill name
	And the the user clicks add new skill button
	Then the user has added a focus
