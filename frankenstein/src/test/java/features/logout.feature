

Feature: The user can log out of the website


  Scenario Outline: User logs out
    Given The user is logged in
    When The user clicks logout
    Then the user lands on the login page

	

