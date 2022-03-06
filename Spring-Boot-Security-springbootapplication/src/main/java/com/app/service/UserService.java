package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.UserRepository;
import com.app.model.User;

@Service
public class UserService {
	@Autowired
	private UserRepository userRepo;
	
	public User saveUser(User user) {
		return userRepo.save(user);
	}	
	public User updateUser(User user) {
		return userRepo.save(user);
	}	
	public List<User> getAllUsers(){
		return (List<User>) userRepo.findAll();
	}
	public void deleteUser(int uid) {
		userRepo.deleteById(uid);
	}
	public User findUserByUid(int uid) {
		return userRepo.findById(uid).get();
	}
	public User getUserByUsername(String username) {
		return userRepo.findByUsername(username);
	}
}
