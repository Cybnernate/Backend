package com.revature.servlet;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


public class MasterServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
    public MasterServlet() {
        super();
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		setAccessControlHeaders(response);
		PrintWriter writer = resp.getWriter();
      		writer.write("test response from myServlet");
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}

	//for Preflight
  @Override
  protected void doOptions(HttpServletRequest req, HttpServletResponse resp)
          throws ServletException, IOException {
      setAccessControlHeaders(resp);
      resp.setStatus(HttpServletResponse.SC_OK);
  }

  private void setAccessControlHeaders(HttpServletResponse resp) {
      resp.setHeader("Access-Control-Allow-Origin", "http://localhost:9000");
      resp.setHeader("Access-Control-Allow-Methods", "GET");
  }

}
