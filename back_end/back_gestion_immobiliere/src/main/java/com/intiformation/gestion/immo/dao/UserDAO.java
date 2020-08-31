package com.intiformation.gestion.immo.dao;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.intiformation.gestion.immo.modele.UserAdmin;

@Repository
public interface UserDAO extends JpaRepository<UserAdmin, Integer> {

}
