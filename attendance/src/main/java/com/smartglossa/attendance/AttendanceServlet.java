package com.smartglossa.attendance;

import java.io.IOException;
import java.text.SimpleDateFormat;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONArray;
import org.json.JSONObject;
import java.util.Date;

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
            	 // Date datesystem= new Date();
            	  JSONObject obj = new JSONObject();
            	  int userId = Integer.parseInt(request.getParameter("uId"));
            	  //String date = request.getParameter("date");
            	 // String date = request.getParameter("date");
            	 //SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
            	 // boolean present = Boolean.parseBoolean(request.getParameter("present"));
            	  String reason = request.getParameter("reason");
            	  boolean present;
          		if(request.getParameter("present").equals("absent"))
          		    present = false;
          		else
          		    present = true;
            	  try {
            		  AttendanceClass atten = new AttendanceClass();
            		  atten.addAttendance(userId, present, reason);
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
					obj.put("status", 0);
					e.printStackTrace();
				}
            	 response.getWriter().print(obj);
              }else if(op.equals("getDate")){
            	  JSONObject obj = new JSONObject();
            	  String date = request.getParameter("date");
            	  try {
					AttendanceClass atten = new AttendanceClass();
					obj = atten.getDate(date);
				} catch (Exception e) {
					e.printStackTrace();
					obj.put("message",e.getMessage());
					obj.put("status", 0);
				}
            	  response.getWriter().print(obj);
              }else if(op.equals("getPresents")){
            	  JSONObject obj = new JSONObject();
            	  String fromdate = request.getParameter("fromdate");
            	  String todate = request.getParameter("todate");
            	  try {
                    AttendanceClass atten = new AttendanceClass();
                    obj = atten.getPresents(fromdate, todate);
    			} catch (Exception e) {
    				// TODO: handle exception
    				obj.put("status", 0);
    			}
            	  response.getWriter().print(obj);
              }
    			}

	}
