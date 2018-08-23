Feature:
	As a valid customer
	If I try to login
	I should be able to do so
	
Scenario:  
	Given the application is opened 
	When valid username and password are entered
	And the user clicks login button  
	Then user should be able to gain access to the application
	

