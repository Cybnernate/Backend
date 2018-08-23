$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/exportCSV.feature");
formatter.feature({
  "line": 1,
  "name": "The user is able to download CSV document",
  "description": "",
  "id": "the-user-is-able-to-download-csv-document",
  "keyword": "Feature"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "the application is opened",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "valid username and password are entered",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "the user clicks login button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "the user is in AssignForce",
  "keyword": "Then "
});
formatter.match({
  "location": "GC_SD_Mercury.the_application_is_opened()"
});
formatter.result({
  "duration": 5715751053,
  "status": "passed"
});
formatter.match({
  "location": "GC_SD_Mercury.valid_username_and_password_are_entered()"
});
formatter.result({
  "duration": 976714541,
  "status": "passed"
});
formatter.match({
  "location": "GC_SD_Mercury.the_user_clicks_login_button()"
});
formatter.result({
  "duration": 128240110,
  "status": "passed"
});
formatter.match({
  "location": "GC_SD_Mercury.the_user_is_in_AssignForce()"
});
formatter.result({
  "duration": 15704,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "The user is able to download CSV document",
  "description": "",
  "id": "the-user-is-able-to-download-csv-document;the-user-is-able-to-download-csv-document",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "the user is on the overview page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "the user clicks the export button",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "the document is downloaded",
  "keyword": "Then "
});
formatter.match({
  "location": "GC_SD_Mercury.the_user_is_on_the_overview_page()"
});
formatter.result({
  "duration": 35425307,
  "status": "passed"
});
formatter.match({
  "location": "GC_SD_Mercury.the_user_clicks_the_export_button()"
});
formatter.result({
  "duration": 35882793,
  "status": "passed"
});
formatter.match({
  "location": "GC_SD_Mercury.the_document_is_downloaded()"
});
formatter.result({
  "duration": 114715538,
  "status": "passed"
});
});