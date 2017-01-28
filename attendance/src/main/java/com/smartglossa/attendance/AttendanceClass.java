package com.smartglossa.attendance;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import org.json.JSONArray;
import org.json.JSONObject;

public class AttendanceClass {
	Connection conn = null;
	Statement stmt = null;
	ResultSet rs = null;

	public AttendanceClass() throws ClassNotFoundException, SQLException {
		openConnection();
	}
	public void addAttendance(int userId,String date,boolean present,String reason)throws SQLException{
		try {
			String query = "insert into attendance(userId,date,present,reason) values("+userId+",'"+date+"',"+present+",'"+reason+"')";
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
