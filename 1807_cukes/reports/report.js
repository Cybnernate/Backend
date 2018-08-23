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
  "duration": 4139012542,
  "status": "passed"
});
formatter.match({
  "location": "GC_SD_Mercury.valid_username_and_password_are_entered()"
});
formatter.result({
  "duration": 1390800952,
  "status": "passed"
});
formatter.match({
  "location": "GC_SD_Mercury.the_user_clicks_login_button()"
});
formatter.result({
  "duration": 166641491,
  "status": "passed"
});
formatter.match({
  "location": "GC_SD_Mercury.user_should_be_able_to_gain_access_to_the_application()"
});
formatter.result({
  "duration": 78590529,
  "status": "passed"
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
  "duration": 3110919808,
  "status": "passed"
});
formatter.match({
  "location": "GC_SD_Mercury.valid_username_and_password_are_entered()"
});
formatter.result({
  "duration": 1464136576,
  "status": "passed"
});
formatter.match({
  "location": "GC_SD_Mercury.the_user_clicks_login_button()"
});
formatter.result({
  "duration": 84503298,
  "status": "passed"
});
formatter.match({
  "location": "GC_SD_Mercury.the_user_is_in_AssignForce()"
});
formatter.result({
  "duration": 22141,
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
  "duration": 51611,
  "status": "passed"
});
formatter.match({
  "location": "GC_SD_Mercury.the_user_clicks_on_Overview_tab()"
});
formatter.result({
  "duration": 27685279,
  "status": "passed"
});
formatter.match({
  "location": "GC_SD_Mercury.the_user_goes_to_the_overview()"
});
formatter.result({
  "duration": 81983375,
  "status": "passed"
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
  "duration": 3081574181,
  "status": "passed"
});
formatter.match({
  "location": "GC_SD_Mercury.valid_username_and_password_are_entered()"
});
formatter.result({
  "duration": 14512868,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"name\",\"selector\":\"email\"}\n  (Session info: chrome\u003d68.0.3440.106)\n  (Driver info: chromedriver\u003d2.41.578706 (5f725d1b4f0a4acbf5259df887244095596231db),platform\u003dMac OS X 10.13.6 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027Jacobs-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:1893:2f71:9671:b28%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.13.6\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dMAC, acceptSslCerts\u003dfalse, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:54073}, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, platformName\u003dMAC, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.41.578706 (5f725d1b4f0a4acbf5259df887244095596231db), userDataDir\u003d/var/folders/gj/c_wj7vmx2991grvb_qk3scv40000gn/T/.org.chromium.Chromium.N2eZMX}, takesHeapSnapshot\u003dtrue, unhandledPromptBehavior\u003d, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d68.0.3440.106, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 8f445bdf190403ce0b5caf2b00e418ed\n*** Element info: {Using\u003dname, value\u003demail}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:416)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:494)\n\tat org.openqa.selenium.By$ByName.findElement(By.java:303)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:408)\n\tat com.revature.pom.LoginPage.user(LoginPage.java:12)\n\tat com.revature.cucumberop.GC_SD_Mercury.valid_username_and_password_are_entered(GC_SD_Mercury.java:59)\n\tat ✽.When valid username and password are entered(exportCSV.feature:5)\n",
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
  "status": "skipped"
});
formatter.match({
  "location": "GC_SD_Mercury.the_user_clicks_the_export_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "GC_SD_Mercury.the_document_is_downloaded()"
});
formatter.result({
  "status": "skipped"
});
});