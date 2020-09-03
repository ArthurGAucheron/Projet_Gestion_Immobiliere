package com.intiformation.gestion.immo.authentification;


import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.intiformation.gestion.immo.dao.ConseillerImmobilierRepository;
import com.intiformation.gestion.immo.modele.ConseillerImmobilier;



@Service
public class JwtUserDetailsService implements UserDetailsService {

	@Autowired
	private ConseillerImmobilierRepository consService;

	@Autowired
	private PasswordEncoder bcryptEncoder;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		
		// can be a conseiller or a client
		
		ConseillerImmobilier cons = consService.findByIdentifiant(username);
		
		 if ( cons != null ) {
			
			// add admin Authority
			SimpleGrantedAuthority authority = new SimpleGrantedAuthority("ROLE_ADMIN");
			List<SimpleGrantedAuthority> updatedAuthorities = new ArrayList<SimpleGrantedAuthority>();
			updatedAuthorities.add(authority);
			return new User(cons.getIdentifiant(), cons.getMotDePasse(), updatedAuthorities);
			
		} else {
			throw new UsernameNotFoundException("User not found with username: " + username);
		}
		
	}

	
	
	public ConseillerImmobilier saveAdmin(ConseillerImmobilier cons) {
		cons.setMotDePasse(bcryptEncoder.encode(cons.getMotDePasse()));
		return consService.save(cons);
	}

}