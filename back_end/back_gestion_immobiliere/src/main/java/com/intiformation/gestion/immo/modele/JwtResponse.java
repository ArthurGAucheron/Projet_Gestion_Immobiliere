package com.intiformation.gestion.immo.modele;

import java.io.Serializable;

public class JwtResponse implements Serializable {
	
	//______________________prop_____________________________
	private static final long serialVersionUID = -8091879091924046844L;
	private final String jwttoken;

	//__________________________getter et setter_______________________
	
	public JwtResponse(String jwttoken) {
		this.jwttoken = jwttoken;
	}

	public String getToken() {
		return this.jwttoken;
	}
}//end class
