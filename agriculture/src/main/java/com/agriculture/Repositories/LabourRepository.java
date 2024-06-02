package com.agriculture.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.agriculture.Models.Labour;

@Repository
public interface LabourRepository extends JpaRepository<Labour,Long>{

}
