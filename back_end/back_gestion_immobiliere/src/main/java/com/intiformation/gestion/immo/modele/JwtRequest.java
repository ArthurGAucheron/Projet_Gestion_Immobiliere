package com.intiformation.gestion.immo.modele;

import java.io.Serializable;

public class JwtRequest implements Serializable{

	
	//______________________________prop___________________________________

	private static final long serialVersionUID = 5926468583005150707L;
	private String username;
	private String password;

	//___________________________________ctor____________________________________

//need default constructor for JSON Parsing
	public JwtRequest() {
	}

	public JwtRequest(String username, String password) {
		this.setUsername(username);
		this.setPassword(password);
	}

	//__________________________getter et setter_____________________________

	public String getUsername() {
		return this.username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return this.password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
	
	
}//end class
