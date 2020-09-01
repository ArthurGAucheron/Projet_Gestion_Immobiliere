package com.intiformation.gestion.immo.modele;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name="users")
public class UserAdmin {

	//______________________________prop___________________________________
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long username;
	private String password;
	

	//___________________________________ctor____________________________________
	public UserAdmin() {
		super();
	}

	public UserAdmin(Long username, String password) {
		super();
		this.username = username;
		this.password = password;
	}
	
	//_______________________________getter et setter_____________________________

	public Long getUsername() {
		return username;
	}

	public void setUsername(Long username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
}//end class
