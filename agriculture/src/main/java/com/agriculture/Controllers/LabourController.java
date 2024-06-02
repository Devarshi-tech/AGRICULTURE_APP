package com.agriculture.Controllers;

// import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
// import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.agriculture.Models.Labour;
import com.agriculture.Services.LabourService;

@RestController
@RequestMapping("/labour")
@CrossOrigin("*s")
public class LabourController {

    @Autowired
    public LabourService labourService;

    @PostMapping("/add")
    public Labour createLabour(@RequestBody Labour labour){
        return labourService.createLabour(labour);
    }

    // @GetMapping("/getAll")
    // public List<Labour> getAllLaboures(){
        
    //     return labourService.getAllLaboures();
    // }

}
