package com.smartglossa.attendance;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONArray;
import org.json.JSONObject;

public class AttendanceServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	public AttendanceServlet() {
		super();
		// TODO Auto-generated constructor stub
	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		doPost(request, response);
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
              String op = request.getParameter("operation");
              if(op.equals("addAttendance")){
            	  JSONObject obj = new JSONObject();
            	  int userId = Integer.parseInt(request.getParameter("uId"));
            	  String date = request.getParameter("date");
            	  boolean present = Boolean.parseBoolean(request.getParameter("present"));
            	  String reason = request.getParameter("reason");
            	  try {
            		  AttendanceClass atten = new AttendanceClass();
            		  atten.addAttendance(userId, date, present, reason);
			          obj.put("status", 1);
				} catch (Exception e) {
					// TODO: handle exception
					e.printStackTrace();
					obj.put("message",e.getMessage());
					obj.put("status", 0);
				}
            	  response.getWriter().print(obj);
              }else if(op.equals("getOneAttendance")){
            	  JSONObject obj = new JSONObject();
            	  int userId = Integer.parseInt(request.getParameter("userId"));
            	 try {
            		 AttendanceClass atten = new AttendanceClass();
            		 obj = atten.getOneAttendance(userId);
				} catch (Exception e) {
					// TODO: handle exception
					obj.put("status", 0);
					e.printStackTrace();
				}
            	 response.getWriter().print(obj);
              }else if(op.equals("getAllAttendance")){
            	  JSONArray array = new JSONArray();
            	  try {
					AttendanceClass atten = new AttendanceClass();
					array = atten.getAllAccount();
				} catch (Exception e) {
					// TODO: handle exception
					e.printStackTrace();
				}
            	  response.getWriter().print(array);
              }else if(op.equals("update")){
            	  JSONObject obj = new JSONObject();
            	  int userId = Integer.parseInt(request.getParameter("uId"));
            	  String date = request.getParameter("date");
            	  boolean present = Boolean.parseBoolean(request.getParameter("present"));
            	  String reason = request.getParameter("reason");
            	  try {
					AttendanceClass atten = new AttendanceClass();
					atten.updateAttendance(userId, date, present, reason);
					obj.put("status", 1);
				} catch (Exception e) {
					// TODO: handle exception
					obj.put("status", 0);
					e.printStackTrace();
				}
            	 response.getWriter().print(obj);
              }
	}
}
