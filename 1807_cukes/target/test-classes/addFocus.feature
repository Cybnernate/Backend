Feature: The user is able to add a focus

Background:
	Given the application is opened 
	When valid username and password are entered
	And the user clicks login button  
	Then the user is in AssignForce
	
	
Scenario: The user is able to add a focus
	Given the user is on the curricula page
	When the user clicks the focus button
	And the user enters focus name
	And the user clicks focus drop down
	And the user clicks a focus option
	And the the user clicks add focus button
	Then the user has added a skill 