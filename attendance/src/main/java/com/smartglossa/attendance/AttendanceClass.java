package com.smartglossa.attendance;

import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.json.JSONArray;
import org.json.JSONObject;

public class AttendanceClass {
	Connection conn = null;
	Statement stmt = null;
	ResultSet rs = null;

	public AttendanceClass() throws ClassNotFoundException, SQLException, IOException {
		openConnection();
	}
	public void addAttendance(int userId,boolean present,String reason)throws SQLException, ParseException{
		try {
      	    //Date datesystem= new Date();date time day
      	  //SimpleDateFormat sm = new SimpleDateFormat("MM-dd-yyyy");
      	 // String Date = sm.format(Date);
      	//java.util.Date date = new java.text.SimpleDateFormat("dd.MM.yyyy");
			String query = "insert into attendance(userId,date,present,reason) values("+userId+",CURDATE(),"+present+",'"+reason+"')";
			stmt.execute(query);
		} finally {
          closeConnection();
		}
	}
	public JSONObject getOneAttendance(int userId)throws SQLException{
		JSONObject obj = new JSONObject();
		try {
			String query = "select * form attendance user="+userId+"";
			rs = stmt.executeQuery(query);
			if(rs.next()){
				obj.put("userId", rs.getInt("userId"));
				obj.put("date", rs.getString("date"));
				obj.put("present", rs.getBoolean("present"));
				obj.put("reason", rs.getString("reason"));
			}
		} finally {
			// TODO: handle finally clause
			closeConnection();
		}
		return obj;
	}
	public JSONArray getAllAccount() throws SQLException {
		JSONArray array = new JSONArray();
		try {
			String query = "Select *from attendance";
			rs = stmt.executeQuery(query);
			while (rs.next()) {
				JSONObject obj = new JSONObject();
				obj.put("userId", rs.getInt("userId"));
				obj.put("date", rs.getString("date"));
				obj.put("present", rs.getBoolean("present"));
				obj.put("reason", rs.getString("reason"));
				array.put(obj);

			}
		} finally {
			closeConnection();
		}
		return array;
	}
	public void updateAttendance(int userId,String date,boolean present,String reason)throws SQLException{
		try {
			String query = "update attendance set date='"+date+"',"+present+",'"+reason+"',where userId="+userId+"";
			stmt.execute(query);
		} finally {
			// TODO: handle finally clause
			closeConnection();
		}
	}
	public JSONObject getDate(String date)throws SQLException{
		JSONObject obj = new JSONObject();
		try {
			String query = "select present from attendance where date="+date+"";
			rs = stmt.executeQuery(query);
			if(rs.next()){
				obj.put("present", rs.getBoolean("present"));
			}
		} finally {
			// TODO: handle finally clause
			closeConnection();
		}
		return obj;
	}
	private void openConnection() throws SQLException, ClassNotFoundException {
		Class.forName("com.mysql.jdbc.Driver");
		conn = DriverManager.getConnection("jdbc:mysql://" + UserConstants.MYSQL_SERVER + "/" + UserConstants.DATABASE,
				UserConstants.USERNAME, UserConstants.PASSWORD);
		stmt = conn.createStatement();
	}

	private void closeConnection() throws SQLException {
		if (conn != null) {
			conn.close();
		}
		if (stmt != null) {
			stmt.close();
		}
		if (rs != null) {
			rs.close();
		}
	}
}
