package com.agriculture.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.agriculture.Models.Labour;
import com.agriculture.Repositories.LabourRepository;

@Service
public class LabourService {

    @Autowired
    private LabourRepository labourRepository;

    public Labour createLabour(Labour labour){
        return labourRepository.save(labour);
    }
}
