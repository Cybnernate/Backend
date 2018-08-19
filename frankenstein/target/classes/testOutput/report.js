$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/features/launchApplication.feature");
formatter.feature({
  "line": 3,
  "name": "The user can open the application",
  "description": "",
  "id": "the-user-can-open-the-application",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "User launches the application",
  "description": "",
  "id": "the-user-can-open-the-application;user-launches-the-application",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "The browser targets the site URL",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "the user arrives at the login page",
  "keyword": "Then "
});
formatter.uri("src/test/java/features/logout.feature");
formatter.feature({
  "line": 3,
  "name": "The user can log out of the website",
  "description": "",
  "id": "the-user-can-log-out-of-the-website",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "User logs out",
  "description": "",
  "id": "the-user-can-log-out-of-the-website;user-logs-out",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "The user is logged in",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "The user clicks logout",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "the user lands on the login page",
  "keyword": "Then "
});
formatter.uri("src/test/java/features/verifyBatchesPage.feature");
formatter.feature({
  "line": 3,
  "name": "The user can view the batch information page",
  "description": "",
  "id": "the-user-can-view-the-batch-information-page",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "The user can view the batch information page",
  "description": "",
  "id": "the-user-can-view-the-batch-information-page;the-user-can-view-the-batch-information-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "The user is logged in",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "the user clicks the batches navbutton",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "the user arrives at the batch info page",
  "keyword": "Then "
});
formatter.uri("src/test/java/features/verifyCurriculaPage.feature");
formatter.feature({
  "line": 3,
  "name": "The user can view the curriculum information page",
  "description": "",
  "id": "the-user-can-view-the-curriculum-information-page",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "The user can view the curriculum information page",
  "description": "",
  "id": "the-user-can-view-the-curriculum-information-page;the-user-can-view-the-curriculum-information-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "The user is logged in",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "the user clicks the curruculum navbutton",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "the user arrives at the curriculum info page",
  "keyword": "Then "
});
formatter.uri("src/test/java/features/verifyLogin.feature");
formatter.feature({
  "line": 3,
  "name": "The user can login to the site",
  "description": "",
  "id": "the-user-can-login-to-the-site",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "User logs in",
  "description": "",
  "id": "the-user-can-login-to-the-site;user-logs-in",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "The user is on the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "the user enters a valid \u003cusername\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "the user enters a valid \u003cpassword\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "the user clicks the login button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "the user arrives at the home page",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "the-user-can-login-to-the-site;user-logs-in;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 17,
      "id": "the-user-can-login-to-the-site;user-logs-in;;1"
    },
    {
      "cells": [
        "svp@revature.com",
        "p@$$w0rd"
      ],
      "line": 18,
      "id": "the-user-can-login-to-the-site;user-logs-in;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 18,
  "name": "User logs in",
  "description": "",
  "id": "the-user-can-login-to-the-site;user-logs-in;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "The user is on the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "the user enters a valid svp@revature.com",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "the user enters a valid p@$$w0rd",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "the user clicks the login button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "the user arrives at the home page",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});