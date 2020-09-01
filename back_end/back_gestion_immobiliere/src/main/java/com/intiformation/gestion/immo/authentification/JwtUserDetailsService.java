package com.intiformation.gestion.immo.authentification;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.security.core.userdetails.User;


import com.intiformation.gestion.immo.dao.UserDAO;
import com.intiformation.gestion.immo.modele.UserAdmin;




@Service
public class JwtUserDetailsService implements UserDetailsService {

	
	private UserDAO userDao;
	

	@Autowired
	private PasswordEncoder bcryptEncoder;

	
	// Cette methode simule la base de donnee :
	// Si le username correspond a javainuse (ie il est present dans la base) alors
	// elle retourne un objet user avec en password le hash correspondant a notre
	// mot de passe
	// “password” ecrit en dur dans l’appli
	@Override
	@Transactional	 
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		if ("javainuse".equals(username)) {
			return new User("javainuse", "$2a$10$slYQmyNdGzTn7ZLBXBChFOC9f6kFjAqPhccnP6DxlWXx2lPk1C3G6",
					new ArrayList<>());
		} else {
			throw new UsernameNotFoundException("User not found with username: " + username);
		}
	}

	public UserAdmin save(UserAdmin user) {
		UserAdmin newUser = new UserAdmin();
		newUser.setUsername(user.getUsername());
		newUser.setPassword(bcryptEncoder.encode(user.getPassword()));
		return userDao.save(newUser);
	}

	
}// end class
