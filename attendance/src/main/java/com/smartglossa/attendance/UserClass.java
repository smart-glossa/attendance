package com.smartglossa.attendance;

import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import org.json.JSONArray;
import org.json.JSONObject;

public class UserClass {
	Connection conn = null;
	Statement stmt = null;
	ResultSet rs = null;
	PreparedStatement ps = null;
	
	public UserClass() throws ClassNotFoundException, SQLException, IOException {
		openConnection();
	}
	public void addUser(int userId,String name,String address,String contactNo,String email)throws SQLException{
		try {
			String query = "insert into user(userId,name,address,contactNo,email) values("+userId+",'"+name+"','"+address+"','"+contactNo+"','"+email+"')";
			stmt.execute(query);
		} finally {
			// TODO: handle finally clause
			closeConnection();
		}
	}
	public void update(int userId,String name,String address,String contactNo,String email)throws SQLException{
		try {
			String query = "update user set name='"+name+"',address'"+address+"',contactNo'"+contactNo+"',email'"+email+"' where userId="+userId+"";
			stmt.execute(query);
		} finally {
			// TODO: handle finally clause
			closeConnection();
		}
	}
	public JSONObject getOne(int userId)throws SQLException{
		JSONObject obj = new JSONObject();
		try {
			String query = "select * from user where userId="+userId+"";
            rs = stmt.executeQuery(query);	
            if(rs.next()){
            	obj.put("userId", rs.getInt("userId"));
            	obj.put("name", rs.getString("name"));
            	obj.put("address", rs.getString("address"));
            	obj.put("conNo", rs.getString("contactNo"));
            	obj.put("email", rs.getString("email"));
            }
		} finally {
			// TODO: handle finally clause
			closeConnection();
		}
		return obj;
	}
	public JSONArray getAll()throws SQLException{
		JSONArray array = new JSONArray();
		try {
			String query = "select * from user";
			rs = stmt.executeQuery(query);
			while(rs.next()){
				JSONObject obj = new JSONObject();
				obj.put("userId", rs.getInt("userId"));
            	obj.put("name", rs.getString("name"));
            	obj.put("address", rs.getString("address"));
            	obj.put("conNo", rs.getString("contactNo"));
            	obj.put("email", rs.getString("email"));
            	array.put(obj);
			}
		} finally {
			// TODO: handle finally clause
			closeConnection();
		}
		return array;
	}
	public void deleteUser(int userId) throws SQLException {
		JSONObject obj = new JSONObject();
		try {
			String query = "delete from user where userId="+userId+"";
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
