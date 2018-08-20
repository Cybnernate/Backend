

Feature: The user can export a CSV document
@exportCSV
Scenario: User is in Overview
Given the user is in the overview page
When the user clicks the export button
Then the user receives a CSV file