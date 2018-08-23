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
  "duration": 4127441055,
  "status": "passed"
});
formatter.match({
  "location": "GC_SD_Mercury.valid_username_and_password_are_entered()"
});
formatter.result({
  "duration": 1380144782,
  "status": "passed"
});
formatter.match({
  "location": "GC_SD_Mercury.the_user_clicks_login_button()"
});
formatter.result({
  "duration": 180825735,
  "status": "passed"
});
formatter.match({
  "location": "GC_SD_Mercury.user_should_be_able_to_gain_access_to_the_application()"
});
formatter.result({
  "duration": 118381465,
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
  "duration": 3207462903,
  "status": "passed"
});
formatter.match({
  "location": "GC_SD_Mercury.valid_username_and_password_are_entered()"
});
formatter.result({
  "duration": 1390408575,
  "status": "passed"
});
formatter.match({
  "location": "GC_SD_Mercury.the_user_clicks_login_button()"
});
formatter.result({
  "duration": 95333094,
  "status": "passed"
});
formatter.match({
  "location": "GC_SD_Mercury.the_user_is_in_AssignForce()"
});
formatter.result({
  "duration": 23900,
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
  "duration": 19546437,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#mat-tab-label-0-3\"}\n  (Session info: chrome\u003d68.0.3440.106)\n  (Driver info: chromedriver\u003d2.41.578706 (5f725d1b4f0a4acbf5259df887244095596231db),platform\u003dMac OS X 10.13.6 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027Jacobs-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:1893:2f71:9671:b28%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.13.6\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dMAC, acceptSslCerts\u003dfalse, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:54204}, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, platformName\u003dMAC, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.41.578706 (5f725d1b4f0a4acbf5259df887244095596231db), userDataDir\u003d/var/folders/gj/c_wj7vmx2991grvb_qk3scv40000gn/T/.org.chromium.Chromium.OZR7FV}, takesHeapSnapshot\u003dtrue, unhandledPromptBehavior\u003d, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d68.0.3440.106, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 4b2e209c81a45a45bf57ef79c63bb015\n*** Element info: {Using\u003dcss selector, value\u003d#mat-tab-label-0-3}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:416)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:510)\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:430)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:408)\n\tat com.revature.pom.CurriculaPage.curriculaTab(CurriculaPage.java:12)\n\tat com.revature.cucumberop.GC_SD_Mercury.the_user_is_on_the_curricula_page(GC_SD_Mercury.java:192)\n\tat ✽.Given the user is on the curricula page(addFocus.feature:11)\n",
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
  "duration": 3679821501,
  "status": "passed"
});
formatter.match({
  "location": "GC_SD_Mercury.valid_username_and_password_are_entered()"
});
formatter.result({
  "duration": 1455637871,
  "status": "passed"
});
formatter.match({
  "location": "GC_SD_Mercury.the_user_clicks_login_button()"
});
formatter.result({
  "duration": 85688416,
  "status": "passed"
});
formatter.match({
  "location": "GC_SD_Mercury.the_user_is_in_AssignForce()"
});
formatter.result({
  "duration": 18396,
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
  "duration": 17847813,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#mat-tab-label-0-3\"}\n  (Session info: chrome\u003d68.0.3440.106)\n  (Driver info: chromedriver\u003d2.41.578706 (5f725d1b4f0a4acbf5259df887244095596231db),platform\u003dMac OS X 10.13.6 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027Jacobs-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:1893:2f71:9671:b28%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.13.6\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dMAC, acceptSslCerts\u003dfalse, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:54228}, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, platformName\u003dMAC, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.41.578706 (5f725d1b4f0a4acbf5259df887244095596231db), userDataDir\u003d/var/folders/gj/c_wj7vmx2991grvb_qk3scv40000gn/T/.org.chromium.Chromium.MnGMrr}, takesHeapSnapshot\u003dtrue, unhandledPromptBehavior\u003d, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d68.0.3440.106, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 8593c6c61fb2196d0036c43b9ce305cd\n*** Element info: {Using\u003dcss selector, value\u003d#mat-tab-label-0-3}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:416)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:510)\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:430)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:408)\n\tat com.revature.pom.CurriculaPage.curriculaTab(CurriculaPage.java:12)\n\tat com.revature.cucumberop.GC_SD_Mercury.the_user_is_on_the_curricula_page(GC_SD_Mercury.java:192)\n\tat ✽.Given the user is on the curricula page(addNewSkill.feature:10)\n",
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
  "duration": 3326259884,
  "status": "passed"
});
formatter.match({
  "location": "GC_SD_Mercury.valid_username_and_password_are_entered()"
});
formatter.result({
  "duration": 59363980,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"name\",\"selector\":\"email\"}\n  (Session info: chrome\u003d68.0.3440.106)\n  (Driver info: chromedriver\u003d2.41.578706 (5f725d1b4f0a4acbf5259df887244095596231db),platform\u003dMac OS X 10.13.6 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027Jacobs-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:1893:2f71:9671:b28%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.13.6\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dMAC, acceptSslCerts\u003dfalse, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:54256}, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, platformName\u003dMAC, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.41.578706 (5f725d1b4f0a4acbf5259df887244095596231db), userDataDir\u003d/var/folders/gj/c_wj7vmx2991grvb_qk3scv40000gn/T/.org.chromium.Chromium.GCJ9Pk}, takesHeapSnapshot\u003dtrue, unhandledPromptBehavior\u003d, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d68.0.3440.106, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 2e7aecaf352ad405e45d200892d654f5\n*** Element info: {Using\u003dname, value\u003demail}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:416)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:494)\n\tat org.openqa.selenium.By$ByName.findElement(By.java:303)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:408)\n\tat com.revature.pom.LoginPage.user(LoginPage.java:12)\n\tat com.revature.cucumberop.GC_SD_Mercury.valid_username_and_password_are_entered(GC_SD_Mercury.java:65)\n\tat ✽.When valid username and password are entered(clickOverview.feature:5)\n",
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
  "status": "skipped"
});
formatter.match({
  "location": "GC_SD_Mercury.the_user_clicks_on_Overview_tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "GC_SD_Mercury.the_user_goes_to_the_overview()"
});
formatter.result({
  "status": "skipped"
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
  "duration": 4059811013,
  "status": "passed"
});
formatter.match({
  "location": "GC_SD_Mercury.valid_username_and_password_are_entered()"
});
formatter.result({
  "duration": 1404859911,
  "status": "passed"
});
formatter.match({
  "location": "GC_SD_Mercury.the_user_clicks_login_button()"
});
formatter.result({
  "duration": 135115034,
  "status": "passed"
});
formatter.match({
  "location": "GC_SD_Mercury.the_user_is_in_AssignForce()"
});
formatter.result({
  "duration": 16393,
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
  "duration": 21749622,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#mat-tab-label-0-4\"}\n  (Session info: chrome\u003d68.0.3440.106)\n  (Driver info: chromedriver\u003d2.41.578706 (5f725d1b4f0a4acbf5259df887244095596231db),platform\u003dMac OS X 10.13.6 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027Jacobs-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:1893:2f71:9671:b28%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.13.6\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dMAC, acceptSslCerts\u003dfalse, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:54282}, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, platformName\u003dMAC, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.41.578706 (5f725d1b4f0a4acbf5259df887244095596231db), userDataDir\u003d/var/folders/gj/c_wj7vmx2991grvb_qk3scv40000gn/T/.org.chromium.Chromium.Bvc5n2}, takesHeapSnapshot\u003dtrue, unhandledPromptBehavior\u003d, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d68.0.3440.106, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: a5569bfe3cd7aabe73e0570bb8d1dd4a\n*** Element info: {Using\u003dcss selector, value\u003d#mat-tab-label-0-4}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:416)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:510)\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:430)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:408)\n\tat com.revature.pom.TrainerPage.trainerTab(TrainerPage.java:13)\n\tat com.revature.cucumberop.GC_SD_Mercury.the_user_is_on_the_trainer_page(GC_SD_Mercury.java:332)\n\tat ✽.Given the user is on the trainer page(deleteTrainer.feature:10)\n",
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
  "duration": 3525784649,
  "status": "passed"
});
formatter.match({
  "location": "GC_SD_Mercury.valid_username_and_password_are_entered()"
});
formatter.result({
  "duration": 1422068581,
  "status": "passed"
});
formatter.match({
  "location": "GC_SD_Mercury.the_user_clicks_login_button()"
});
formatter.result({
  "duration": 82511748,
  "status": "passed"
});
formatter.match({
  "location": "GC_SD_Mercury.the_user_is_in_AssignForce()"
});
formatter.result({
  "duration": 13789,
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
  "duration": 15012572,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#mat-tab-label-0-4\"}\n  (Session info: chrome\u003d68.0.3440.106)\n  (Driver info: chromedriver\u003d2.41.578706 (5f725d1b4f0a4acbf5259df887244095596231db),platform\u003dMac OS X 10.13.6 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027Jacobs-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:1893:2f71:9671:b28%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.13.6\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dMAC, acceptSslCerts\u003dfalse, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:54308}, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, platformName\u003dMAC, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.41.578706 (5f725d1b4f0a4acbf5259df887244095596231db), userDataDir\u003d/var/folders/gj/c_wj7vmx2991grvb_qk3scv40000gn/T/.org.chromium.Chromium.e0nftv}, takesHeapSnapshot\u003dtrue, unhandledPromptBehavior\u003d, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d68.0.3440.106, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 9cc075c8a2cba2e1ee877f410d6e516e\n*** Element info: {Using\u003dcss selector, value\u003d#mat-tab-label-0-4}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:416)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:510)\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:430)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:408)\n\tat com.revature.pom.TrainerPage.trainerTab(TrainerPage.java:13)\n\tat com.revature.cucumberop.GC_SD_Mercury.the_user_is_on_the_trainer_page(GC_SD_Mercury.java:332)\n\tat ✽.Given the user is on the trainer page(downloadResume.feature:10)\n",
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
  "duration": 3547520389,
  "status": "passed"
});
formatter.match({
  "location": "GC_SD_Mercury.valid_username_and_password_are_entered()"
});
formatter.result({
  "duration": 1512280202,
  "status": "passed"
});
formatter.match({
  "location": "GC_SD_Mercury.the_user_clicks_login_button()"
});
formatter.result({
  "duration": 104438214,
  "status": "passed"
});
formatter.match({
  "location": "GC_SD_Mercury.the_user_is_in_AssignForce()"
});
formatter.result({
  "duration": 16687,
  "status": "passed"
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
  "duration": 16760592,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#mat-tab-label-0-2\"}\n  (Session info: chrome\u003d68.0.3440.106)\n  (Driver info: chromedriver\u003d2.41.578706 (5f725d1b4f0a4acbf5259df887244095596231db),platform\u003dMac OS X 10.13.6 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027Jacobs-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:1893:2f71:9671:b28%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.13.6\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dMAC, acceptSslCerts\u003dfalse, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:54332}, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, platformName\u003dMAC, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.41.578706 (5f725d1b4f0a4acbf5259df887244095596231db), userDataDir\u003d/var/folders/gj/c_wj7vmx2991grvb_qk3scv40000gn/T/.org.chromium.Chromium.qsZLQ3}, takesHeapSnapshot\u003dtrue, unhandledPromptBehavior\u003d, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d68.0.3440.106, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 08682de40fdd26ac6d0005d52017d4de\n*** Element info: {Using\u003dcss selector, value\u003d#mat-tab-label-0-2}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:416)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:510)\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:430)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:408)\n\tat com.revature.pom.LocationsPage.locationsTab(LocationsPage.java:12)\n\tat com.revature.cucumberop.GC_SD_Mercury.the_user_is_on_the_locations_page(GC_SD_Mercury.java:385)\n\tat ✽.Given the user is on the locations page(editCapital.feature:10)\n",
  "status": "failed"
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
  "duration": 3528347788,
  "status": "passed"
});
formatter.match({
  "location": "GC_SD_Mercury.valid_username_and_password_are_entered()"
});
formatter.result({
  "duration": 1393627043,
  "status": "passed"
});
formatter.match({
  "location": "GC_SD_Mercury.the_user_clicks_login_button()"
});
formatter.result({
  "duration": 98853689,
  "status": "passed"
});
formatter.match({
  "location": "GC_SD_Mercury.the_user_is_in_AssignForce()"
});
formatter.result({
  "duration": 15880,
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
  "duration": 26375127,
  "status": "passed"
});
formatter.match({
  "location": "GC_SD_Mercury.the_user_clicks_the_export_button()"
});
formatter.result({
  "duration": 18818655,
  "status": "passed"
});
formatter.match({
  "location": "GC_SD_Mercury.the_document_is_downloaded()"
});
formatter.result({
  "duration": 71454265,
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
  "duration": 3090486955,
  "status": "passed"
});
formatter.match({
  "location": "GC_SD_Mercury.valid_username_and_password_are_entered()"
});
formatter.result({
  "duration": 15517777,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"name\",\"selector\":\"email\"}\n  (Session info: chrome\u003d68.0.3440.106)\n  (Driver info: chromedriver\u003d2.41.578706 (5f725d1b4f0a4acbf5259df887244095596231db),platform\u003dMac OS X 10.13.6 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027Jacobs-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:1893:2f71:9671:b28%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.13.6\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dMAC, acceptSslCerts\u003dfalse, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:54387}, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, platformName\u003dMAC, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.41.578706 (5f725d1b4f0a4acbf5259df887244095596231db), userDataDir\u003d/var/folders/gj/c_wj7vmx2991grvb_qk3scv40000gn/T/.org.chromium.Chromium.CiWZ1B}, takesHeapSnapshot\u003dtrue, unhandledPromptBehavior\u003d, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d68.0.3440.106, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: c42cab2b7db22559e2b728895357a696\n*** Element info: {Using\u003dname, value\u003demail}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:416)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:494)\n\tat org.openqa.selenium.By$ByName.findElement(By.java:303)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:408)\n\tat com.revature.pom.LoginPage.user(LoginPage.java:12)\n\tat com.revature.cucumberop.GC_SD_Mercury.valid_username_and_password_are_entered(GC_SD_Mercury.java:65)\n\tat ✽.When valid username and password are entered(restonDropDown.feature:5)\n",
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
  "status": "skipped"
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