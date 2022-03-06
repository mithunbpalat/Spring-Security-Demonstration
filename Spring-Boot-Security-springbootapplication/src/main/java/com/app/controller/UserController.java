package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.model.User;
import com.app.service.UserService;

@RestController
@CrossOrigin("*")
public class UserController {
	@Autowired
	private UserService userServ;
	
	@Bean
	public BCryptPasswordEncoder encode() {
		return new BCryptPasswordEncoder();
	}
	
	@PostMapping(value="postuser")
	public List<User> saveUser(@RequestBody User user){
		System.out.println("User works");
		BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
		String pwd = user.getPassword();
		String encodedPassword = passwordEncoder.encode(pwd);
		user.setPassword(encodedPassword);
		System.out.println(encodedPassword);
		userServ.saveUser(user);
		return userServ.getAllUsers();
	}
	@PutMapping(value="updateuser")
	public List<User> updateUser(@RequestBody User user){
		System.out.println("User update works");
		BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
		String pwd = user.getPassword();
		String encodedPassword = passwordEncoder.encode(pwd);
		user.setPassword(encodedPassword);
		System.out.println(encodedPassword);
		userServ.updateUser(user);
		return userServ.getAllUsers();
	}
	@GetMapping(value="getallusers")
	public List<User> getAllUser(){
		return userServ.getAllUsers();
	}
	@DeleteMapping(value="deleteuserbyid")
	public List<User> deleteUser(@RequestParam int uid){
		userServ.deleteUser(uid);
		return userServ.getAllUsers();
	}
	@GetMapping(value="getuserbyid")
	public User getUserById(@RequestParam int uid){
		return userServ.findUserByUid(uid);
	}
	@PostMapping(value="getuserbyuname")
	public String getUserByUsername(@RequestBody User user){
		String s = "1";
		String username= user.getUsername();
		String testpwd = user.getPassword();
		System.out.println(testpwd);
		User usr = userServ.getUserByUsername(username);
		String originalpwd = usr.getPassword();
		System.out.println(originalpwd);
		System.out.println(testpwd);
		
		
		BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

		boolean isPasswordMatch = passwordEncoder.matches(testpwd, originalpwd);
		System.out.println(isPasswordMatch);
		
		
		if (isPasswordMatch) {
			s= "authenticated";
			System.out.println(s);
		}
		return s;
	}
	@GetMapping(value="getuserbyusername")
	public User getUserByUsername(@RequestParam String username){
		return userServ.getUserByUsername(username);
	}
	
	@PutMapping(value="updateuserprofile")
	public User updateUserProfile(@RequestBody User user){
		System.out.println("User update profile works");
		 int uid = user.getUid();
		BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
		String pwd = user.getPassword();
		String encodedPassword = passwordEncoder.encode(pwd);
		user.setPassword(encodedPassword);
		System.out.println(encodedPassword);
		userServ.updateUser(user);
		return userServ.findUserByUid(uid);
	}
}
