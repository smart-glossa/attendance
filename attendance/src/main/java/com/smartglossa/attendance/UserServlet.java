package com.smartglossa.attendance;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONObject;
public class UserServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    public UserServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doPost(request, response);
	}
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
          String op = request.getParameter("operation");
          if(op.equals("addUser")){
        	  JSONObject obj = new JSONObject();
        	  int userId = Integer.parseInt(request.getParameter("uId"));
        	  String name = request.getParameter("name");
        	  String address = request.getParameter("addr");
        	  String contactNo = request.getParameter("conNo");
        	  String email = request.getParameter("email");
        	  try {
        		  UserClass user = new UserClass();
        		  user.addUser(userId, name, address, contactNo, email);
				  obj.put("status", 1);
			} catch (Exception e) {
				// TODO: handle exception
				obj.put("status", 0);
				e.printStackTrace();
			}
        	  response.getWriter().println(obj);
          }else if(op.equals("updateUser")){
        	  JSONObject obj = new JSONObject();
        	  int userId = Integer.parseInt(request.getParameter("uId"));
        	  String name = request.getParameter("name");
        	  String address = request.getParameter("addr");
        	  String contactNo = request.getParameter("conNo");
        	  String email = request.getParameter("email");
        	  try {
        		  UserClass user = new UserClass();
        		  user.update(userId, name, address, contactNo, email);
                  obj.put("status", 1);        		  
			} catch (Exception e) {
				// TODO: handle exception
				obj.put("status", 0);
			}
        	  response.getWriter().println(obj);
          }else if(op.equals("getOne")){
        	  JSONObject obj = new JSONObject();
        	  int userId = Integer.parseInt(request.getParameter("userId"));
        	  try {
				UserClass user = new UserClass();
				obj = user.getOne(userId);
			} catch (Exception e) {
				// TODO: handle exception
				obj.put("status", 0);
				e.printStackTrace();
			}
        	  response.getWriter().println(obj);
          }
			}
	

}
