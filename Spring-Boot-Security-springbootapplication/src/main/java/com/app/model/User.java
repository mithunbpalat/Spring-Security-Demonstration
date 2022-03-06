package com.app.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;

@Entity
@Table(name="user",catalog="testdb")
public class User {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int uid;
	private String username;
	private String password;
	private String email;
	public User() {
		super();
		// TODO Auto-generated constructor stub
	}
	public User(int uid, String username, String password, String email) {
		super();
		this.uid = uid;
		this.username = username;
		this.password = password;
		this.email = email;
	}
	public int getUid() {
		return uid;
	}
	public void setUid(int uid) {
		this.uid = uid;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	
}
