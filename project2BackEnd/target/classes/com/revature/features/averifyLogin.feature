

Feature: The user can login to the site
@login

  Scenario Outline: User logs in
    Given The user is on the login page
    When the user enters a valid <username>
    And the user enters a valid <password>
    And the user clicks the login button
    Then the user arrives at the home page

	

	Examples:
	
	| 	username 					 | 	password		|
	|		svp@revature.com	 |	p@$$w0rd		|