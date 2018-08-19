package com.revature.servlet;

import javax.servlet.http.HttpServletRequest;

public class RequestHelper {

	public static CharSequence process(HttpServletRequest request) {
		System.out.println("boo");
		return "
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Cucumber Features</title>
    <link href="style.css" rel="stylesheet">
    <script src="jquery-1.8.2.min.js"></script>
    <script src="formatter.js"></script>
    <script src="report.js"></script>
  </head>
  <body>
    <div class="cucumber-report"></div>
  </body>
</html>
";
	}

}
