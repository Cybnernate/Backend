$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Mercury1807.feature");
formatter.feature({
  "line": 1,
  "name": "",
  "description": "As a valid customer\nIf I try to login\nI should be able to do so",
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
  "name": "the application is opened",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "valid username and password are entered",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "the user clicks login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user should be able to gain access to the application",
  "keyword": "Then "
});
formatter.match({
  "location": "GC_SD_Mercury.the_application_is_opened()"
});
formatter.result({
  "duration": 4168476079,
  "status": "passed"
});
formatter.match({
  "location": "GC_SD_Mercury.valid_username_and_password_are_entered()"
});
formatter.result({
  "duration": 1482346610,
  "status": "passed"
});
formatter.match({
  "location": "GC_SD_Mercury.the_user_clicks_login_button()"
});
formatter.result({
  "duration": 103750934,
  "status": "passed"
});
formatter.match({
  "location": "GC_SD_Mercury.user_should_be_able_to_gain_access_to_the_application()"
});
formatter.result({
  "duration": 116139995,
  "status": "passed"
});
formatter.uri("addFocus.feature");
formatter.feature({
  "line": 1,
  "name": "The user is able to add a focus",
  "description": "",
  "id": "the-user-is-able-to-add-a-focus",
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
  "duration": 3230021795,
  "status": "passed"
});
formatter.match({
  "location": "GC_SD_Mercury.valid_username_and_password_are_entered()"
});
formatter.result({
  "duration": 1405557431,
  "status": "passed"
});
formatter.match({
  "location": "GC_SD_Mercury.the_user_clicks_login_button()"
});
formatter.result({
  "duration": 80580206,
  "status": "passed"
});
formatter.match({
  "location": "GC_SD_Mercury.the_user_is_in_AssignForce()"
});
formatter.result({
  "duration": 20937,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "The user is able to add a focus",
  "description": "",
  "id": "the-user-is-able-to-add-a-focus;the-user-is-able-to-add-a-focus",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "the user is on the curricula page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "the user clicks the focus button",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "the user enters focus name",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "the user clicks focus drop down",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "the user clicks a focus option",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "the the user clicks add focus button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "the user has added a skill",
  "keyword": "Then "
});
formatter.match({
  "location": "GC_SD_Mercury.the_user_is_on_the_curricula_page()"
});
formatter.result({
  "duration": 21205311,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#mat-tab-label-0-3\"}\n  (Session info: chrome\u003d68.0.3440.106)\n  (Driver info: chromedriver\u003d2.41.578706 (5f725d1b4f0a4acbf5259df887244095596231db),platform\u003dMac OS X 10.13.6 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027Jacobs-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:1893:2f71:9671:b28%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.13.6\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dMAC, acceptSslCerts\u003dfalse, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:55328}, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, platformName\u003dMAC, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.41.578706 (5f725d1b4f0a4acbf5259df887244095596231db), userDataDir\u003d/var/folders/gj/c_wj7vmx2991grvb_qk3scv40000gn/T/.org.chromium.Chromium.heCIxp}, takesHeapSnapshot\u003dtrue, unhandledPromptBehavior\u003d, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d68.0.3440.106, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: d844cfd3400fe145cea70669990b8553\n*** Element info: {Using\u003dcss selector, value\u003d#mat-tab-label-0-3}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:416)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:510)\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:430)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:408)\n\tat com.revature.pom.CurriculaPage.curriculaTab(CurriculaPage.java:12)\n\tat com.revature.cucumberop.GC_SD_Mercury.the_user_is_on_the_curricula_page(GC_SD_Mercury.java:192)\n\tat ✽.Given the user is on the curricula page(addFocus.feature:11)\n",
  "status": "failed"
});
formatter.match({
  "location": "GC_SD_Mercury.the_user_clicks_the_focus_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "GC_SD_Mercury.the_user_enters_focus_name()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "GC_SD_Mercury.the_user_clicks_focus_drop_down()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "GC_SD_Mercury.the_user_clicks_a_focus_option()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "GC_SD_Mercury.the_the_user_clicks_add_focus_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "GC_SD_Mercury.the_user_has_added_a_skill()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("addNewSkill.feature");
formatter.feature({
  "line": 1,
  "name": "The user is able to add a skill",
  "description": "",
  "id": "the-user-is-able-to-add-a-skill",
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
  "duration": 3366551971,
  "status": "passed"
});
formatter.match({
  "location": "GC_SD_Mercury.valid_username_and_password_are_entered()"
});
formatter.result({
  "duration": 1446278994,
  "status": "passed"
});
formatter.match({
  "location": "GC_SD_Mercury.the_user_clicks_login_button()"
});
formatter.result({
  "duration": 91727256,
  "status": "passed"
});
formatter.match({
  "location": "GC_SD_Mercury.the_user_is_in_AssignForce()"
});
formatter.result({
  "duration": 17216,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "The user is able to add a skill",
  "description": "",
  "id": "the-user-is-able-to-add-a-skill;the-user-is-able-to-add-a-skill",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "the user is on the curricula page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "the user clicks the skill button",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "the user enters skill name",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "the the user clicks add new skill button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "the user has added a focus",
  "keyword": "Then "
});
formatter.match({
  "location": "GC_SD_Mercury.the_user_is_on_the_curricula_page()"
});
formatter.result({
  "duration": 19185374,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#mat-tab-label-0-3\"}\n  (Session info: chrome\u003d68.0.3440.106)\n  (Driver info: chromedriver\u003d2.41.578706 (5f725d1b4f0a4acbf5259df887244095596231db),platform\u003dMac OS X 10.13.6 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027Jacobs-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:1893:2f71:9671:b28%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.13.6\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dMAC, acceptSslCerts\u003dfalse, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:55352}, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, platformName\u003dMAC, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.41.578706 (5f725d1b4f0a4acbf5259df887244095596231db), userDataDir\u003d/var/folders/gj/c_wj7vmx2991grvb_qk3scv40000gn/T/.org.chromium.Chromium.ITUuey}, takesHeapSnapshot\u003dtrue, unhandledPromptBehavior\u003d, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d68.0.3440.106, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: d0c39ff6a652daf4b716e9c58eec3ac5\n*** Element info: {Using\u003dcss selector, value\u003d#mat-tab-label-0-3}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:416)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:510)\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:430)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:408)\n\tat com.revature.pom.CurriculaPage.curriculaTab(CurriculaPage.java:12)\n\tat com.revature.cucumberop.GC_SD_Mercury.the_user_is_on_the_curricula_page(GC_SD_Mercury.java:192)\n\tat ✽.Given the user is on the curricula page(addNewSkill.feature:10)\n",
  "status": "failed"
});
formatter.match({
  "location": "GC_SD_Mercury.the_user_clicks_the_skill_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "GC_SD_Mercury.the_user_enters_skill_name()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "GC_SD_Mercury.the_the_user_clicks_add_new_skill_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "GC_SD_Mercury.the_user_has_added_a_focus()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("clickOverview.feature");
formatter.feature({
  "line": 1,
  "name": "User can click the overview page after logging in",
  "description": "",
  "id": "user-can-click-the-overview-page-after-logging-in",
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
  "duration": 3515860656,
  "status": "passed"
});
formatter.match({
  "location": "GC_SD_Mercury.valid_username_and_password_are_entered()"
});
formatter.result({
  "duration": 6123721901,
  "status": "passed"
});
formatter.match({
  "location": "GC_SD_Mercury.the_user_clicks_login_button()"
});
formatter.result({
  "duration": 97898270,
  "status": "passed"
});
formatter.match({
  "location": "GC_SD_Mercury.the_user_is_in_AssignForce()"
});
formatter.result({
  "duration": 12878,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "",
  "description": "",
  "id": "user-can-click-the-overview-page-after-logging-in;",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "the user is logged in",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "the user clicks on Overview tab",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "the user goes to the overview",
  "keyword": "Then "
});
formatter.match({
  "location": "GC_SD_Mercury.the_user_is_logged_in()"
});
formatter.result({
  "duration": 58361,
  "status": "passed"
});
formatter.match({
  "location": "GC_SD_Mercury.the_user_clicks_on_Overview_tab()"
});
formatter.result({
  "duration": 27856949,
  "status": "passed"
});
formatter.match({
  "location": "GC_SD_Mercury.the_user_goes_to_the_overview()"
});
formatter.result({
  "duration": 88543835,
  "status": "passed"
});
formatter.uri("deleteTrainer.feature");
formatter.feature({
  "line": 1,
  "name": "The user is able to delete a trainer",
  "description": "",
  "id": "the-user-is-able-to-delete-a-trainer",
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
  "duration": 3123796875,
  "status": "passed"
});
formatter.match({
  "location": "GC_SD_Mercury.valid_username_and_password_are_entered()"
});
formatter.result({
  "duration": 1392248586,
  "status": "passed"
});
formatter.match({
  "location": "GC_SD_Mercury.the_user_clicks_login_button()"
});
formatter.result({
  "duration": 88737355,
  "status": "passed"
});
formatter.match({
  "location": "GC_SD_Mercury.the_user_is_in_AssignForce()"
});
formatter.result({
  "duration": 14525,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "The user is able to delete a trainer",
  "description": "",
  "id": "the-user-is-able-to-delete-a-trainer;the-user-is-able-to-delete-a-trainer",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "the user is on the trainer page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "the user clicks the delete trainer button",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "the trainer is deleted",
  "keyword": "Then "
});
formatter.match({
  "location": "GC_SD_Mercury.the_user_is_on_the_trainer_page()"
});
formatter.result({
  "duration": 33682482,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#mat-tab-label-0-4\"}\n  (Session info: chrome\u003d68.0.3440.106)\n  (Driver info: chromedriver\u003d2.41.578706 (5f725d1b4f0a4acbf5259df887244095596231db),platform\u003dMac OS X 10.13.6 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027Jacobs-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:1893:2f71:9671:b28%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.13.6\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dMAC, acceptSslCerts\u003dfalse, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:55406}, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, platformName\u003dMAC, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.41.578706 (5f725d1b4f0a4acbf5259df887244095596231db), userDataDir\u003d/var/folders/gj/c_wj7vmx2991grvb_qk3scv40000gn/T/.org.chromium.Chromium.mtNNhy}, takesHeapSnapshot\u003dtrue, unhandledPromptBehavior\u003d, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d68.0.3440.106, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 1517a9bfde3d7562c169197021dd39d0\n*** Element info: {Using\u003dcss selector, value\u003d#mat-tab-label-0-4}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:416)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:510)\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:430)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:408)\n\tat com.revature.pom.TrainerPage.trainerTab(TrainerPage.java:13)\n\tat com.revature.cucumberop.GC_SD_Mercury.the_user_is_on_the_trainer_page(GC_SD_Mercury.java:332)\n\tat ✽.Given the user is on the trainer page(deleteTrainer.feature:10)\n",
  "status": "failed"
});
formatter.match({
  "location": "GC_SD_Mercury.the_user_clicks_the_delete_trainer_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "GC_SD_Mercury.the_trainer_is_deleted()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("downloadResume.feature");
formatter.feature({
  "line": 1,
  "name": "The user is able to download trainer resume",
  "description": "",
  "id": "the-user-is-able-to-download-trainer-resume",
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
  "duration": 3307833290,
  "status": "passed"
});
formatter.match({
  "location": "GC_SD_Mercury.valid_username_and_password_are_entered()"
});
formatter.result({
  "duration": 1417775955,
  "status": "passed"
});
formatter.match({
  "location": "GC_SD_Mercury.the_user_clicks_login_button()"
});
formatter.result({
  "duration": 87970702,
  "status": "passed"
});
formatter.match({
  "location": "GC_SD_Mercury.the_user_is_in_AssignForce()"
});
formatter.result({
  "duration": 15461,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "The user is able to download trainer resume",
  "description": "",
  "id": "the-user-is-able-to-download-trainer-resume;the-user-is-able-to-download-trainer-resume",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "the user is on the trainer page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "the user clicks the download resume button",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "the resume is downloaded",
  "keyword": "Then "
});
formatter.match({
  "location": "GC_SD_Mercury.the_user_is_on_the_trainer_page()"
});
formatter.result({
  "duration": 14469852,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#mat-tab-label-0-4\"}\n  (Session info: chrome\u003d68.0.3440.106)\n  (Driver info: chromedriver\u003d2.41.578706 (5f725d1b4f0a4acbf5259df887244095596231db),platform\u003dMac OS X 10.13.6 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027Jacobs-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:1893:2f71:9671:b28%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.13.6\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dMAC, acceptSslCerts\u003dfalse, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:55432}, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, platformName\u003dMAC, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.41.578706 (5f725d1b4f0a4acbf5259df887244095596231db), userDataDir\u003d/var/folders/gj/c_wj7vmx2991grvb_qk3scv40000gn/T/.org.chromium.Chromium.3k4QGy}, takesHeapSnapshot\u003dtrue, unhandledPromptBehavior\u003d, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d68.0.3440.106, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 43c641f4a665eff313e5115b8e3ae978\n*** Element info: {Using\u003dcss selector, value\u003d#mat-tab-label-0-4}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:416)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:510)\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:430)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:408)\n\tat com.revature.pom.TrainerPage.trainerTab(TrainerPage.java:13)\n\tat com.revature.cucumberop.GC_SD_Mercury.the_user_is_on_the_trainer_page(GC_SD_Mercury.java:332)\n\tat ✽.Given the user is on the trainer page(downloadResume.feature:10)\n",
  "status": "failed"
});
formatter.match({
  "location": "GC_SD_Mercury.the_user_clicks_the_download_resume_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "GC_SD_Mercury.the_resume_is_downloaded()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("editCapital.feature");
formatter.feature({
  "line": 1,
  "name": "The user is able to edit Capital One",
  "description": "",
  "id": "the-user-is-able-to-edit-capital-one",
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
  "duration": 3243082997,
  "status": "passed"
});
formatter.match({
  "location": "GC_SD_Mercury.valid_username_and_password_are_entered()"
});
formatter.result({
  "duration": 15227073,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"name\",\"selector\":\"email\"}\n  (Session info: chrome\u003d68.0.3440.106)\n  (Driver info: chromedriver\u003d2.41.578706 (5f725d1b4f0a4acbf5259df887244095596231db),platform\u003dMac OS X 10.13.6 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027Jacobs-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:1893:2f71:9671:b28%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.13.6\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dMAC, acceptSslCerts\u003dfalse, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:55460}, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, platformName\u003dMAC, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.41.578706 (5f725d1b4f0a4acbf5259df887244095596231db), userDataDir\u003d/var/folders/gj/c_wj7vmx2991grvb_qk3scv40000gn/T/.org.chromium.Chromium.IUgALg}, takesHeapSnapshot\u003dtrue, unhandledPromptBehavior\u003d, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d68.0.3440.106, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 8a37d151545d434a071b0d203694245e\n*** Element info: {Using\u003dname, value\u003demail}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:416)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:494)\n\tat org.openqa.selenium.By$ByName.findElement(By.java:303)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:408)\n\tat com.revature.pom.LoginPage.user(LoginPage.java:12)\n\tat com.revature.cucumberop.GC_SD_Mercury.valid_username_and_password_are_entered(GC_SD_Mercury.java:65)\n\tat ✽.When valid username and password are entered(editCapital.feature:5)\n",
  "status": "failed"
});
formatter.match({
  "location": "GC_SD_Mercury.the_user_clicks_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "GC_SD_Mercury.the_user_is_in_AssignForce()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 9,
  "name": "The user is able to edit Capital One",
  "description": "",
  "id": "the-user-is-able-to-edit-capital-one;the-user-is-able-to-edit-capital-one",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "the user is on the locations page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "the user clicks the edit button",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "the user clicks the city input",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "the user clicks the state input",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "the user clicks the update capital button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "capital one is updated",
  "keyword": "Then "
});
formatter.match({
  "location": "GC_SD_Mercury.the_user_is_on_the_locations_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "GC_SD_Mercury.the_user_clicks_the_edit_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "GC_SD_Mercury.the_user_clicks_the_city_input()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "GC_SD_Mercury.the_user_clicks_the_state_input()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "GC_SD_Mercury.the_user_clicks_the_update_capital_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "GC_SD_Mercury.capital_one_is_updated()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("exportCSV.feature");
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
  "duration": 3396426379,
  "status": "passed"
});
formatter.match({
  "location": "GC_SD_Mercury.valid_username_and_password_are_entered()"
});
formatter.result({
  "duration": 8555981123,
  "status": "passed"
});
formatter.match({
  "location": "GC_SD_Mercury.the_user_clicks_login_button()"
});
formatter.result({
  "duration": 406092155,
  "status": "passed"
});
formatter.match({
  "location": "GC_SD_Mercury.the_user_is_in_AssignForce()"
});
formatter.result({
  "duration": 55527,
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
  "duration": 35708130,
  "status": "passed"
});
formatter.match({
  "location": "GC_SD_Mercury.the_user_clicks_the_export_button()"
});
formatter.result({
  "duration": 21954220,
  "status": "passed"
});
formatter.match({
  "location": "GC_SD_Mercury.the_document_is_downloaded()"
});
formatter.result({
  "duration": 77060145,
  "status": "passed"
});
formatter.uri("restonDropDown.feature");
formatter.feature({
  "line": 1,
  "name": "The user is able to use drop down",
  "description": "",
  "id": "the-user-is-able-to-use-drop-down",
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
  "duration": 3223000024,
  "status": "passed"
});
formatter.match({
  "location": "GC_SD_Mercury.valid_username_and_password_are_entered()"
});
formatter.result({
  "duration": 1393290118,
  "status": "passed"
});
formatter.match({
  "location": "GC_SD_Mercury.the_user_clicks_login_button()"
});
formatter.result({
  "duration": 86331487,
  "status": "passed"
});
formatter.match({
  "location": "GC_SD_Mercury.the_user_is_in_AssignForce()"
});
formatter.result({
  "duration": 16447,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "The user is able to use drop down",
  "description": "",
  "id": "the-user-is-able-to-use-drop-down;the-user-is-able-to-use-drop-down",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "the user is on the locations page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "the user clicks the reston drop down",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "the locations are opened",
  "keyword": "Then "
});
formatter.match({
  "location": "GC_SD_Mercury.the_user_is_on_the_locations_page()"
});
formatter.result({
  "duration": 16292021,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#mat-tab-label-0-2\"}\n  (Session info: chrome\u003d68.0.3440.106)\n  (Driver info: chromedriver\u003d2.41.578706 (5f725d1b4f0a4acbf5259df887244095596231db),platform\u003dMac OS X 10.13.6 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027Jacobs-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:1893:2f71:9671:b28%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.13.6\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dMAC, acceptSslCerts\u003dfalse, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:55509}, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, platformName\u003dMAC, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.41.578706 (5f725d1b4f0a4acbf5259df887244095596231db), userDataDir\u003d/var/folders/gj/c_wj7vmx2991grvb_qk3scv40000gn/T/.org.chromium.Chromium.u6WcyQ}, takesHeapSnapshot\u003dtrue, unhandledPromptBehavior\u003d, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d68.0.3440.106, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: e61929ffae64c6be430897b69177b001\n*** Element info: {Using\u003dcss selector, value\u003d#mat-tab-label-0-2}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:416)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:510)\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:430)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:408)\n\tat com.revature.pom.LocationsPage.locationsTab(LocationsPage.java:12)\n\tat com.revature.cucumberop.GC_SD_Mercury.the_user_is_on_the_locations_page(GC_SD_Mercury.java:385)\n\tat ✽.Given the user is on the locations page(restonDropDown.feature:10)\n",
  "status": "failed"
});
formatter.match({
  "location": "GC_SD_Mercury.the_user_clicks_the_reston_drop_down()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "GC_SD_Mercury.the_locations_are_opened()"
});
formatter.result({
  "status": "skipped"
});
});