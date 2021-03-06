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

	@Column(name="id_user")
	private Long idAdmin;
	
	private String username;
	
	private String password;
	

	//___________________________________ctor____________________________________
	public UserAdmin() {
		super();
	}

	public UserAdmin(String username, String password) {
		super();
		this.username = username;
		this.password = password;
	}
	
	//_______________________________getter et setter_____________________________

	

	public String getPassword() {
		return password;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Long getIdAdmin() {
		return idAdmin;
	}

	public void setIdAdmin(Long idAdmin) {
		this.idAdmin = idAdmin;
	}
	
	
}//end class
