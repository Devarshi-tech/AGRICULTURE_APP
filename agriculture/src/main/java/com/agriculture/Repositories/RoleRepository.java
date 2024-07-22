package com.agriculture.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.agriculture.Models.Role;

@Repository
public interface RoleRepository extends JpaRepository<Role,InternalError>{

}
