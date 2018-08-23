$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Workspace/1807_cukes/src/test/resources/Hello1804.feature");
formatter.feature({
  "line": 1,
  "name": "",
  "description": "As I am hungry\r\nI want to eat salad for lunch\r\nSo I could fill my stomach",
  "id": "",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 6,
  "name": "",
  "description": "",
  "id": ";",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "there is salad",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I am hungry",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I eat salad",
  "keyword": "Then "
});
formatter.match({
  "location": "GlueCode_StepDefinitions.there_is_salad()"
});
formatter.result({
  "duration": 128885444,
  "status": "passed"
});
formatter.match({
  "location": "GlueCode_StepDefinitions.i_am_hungry()"
});
formatter.result({
  "duration": 62061,
  "status": "passed"
});
formatter.match({
  "location": "GlueCode_StepDefinitions.i_eat_salad()"
});
formatter.result({
  "duration": 56419,
  "status": "passed"
});
});