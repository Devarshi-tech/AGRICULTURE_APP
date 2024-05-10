package com.agriculture.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.agriculture.DTOs.MandiBhaavDto;
import com.agriculture.Services.MandiBhaavServiceImpl;

@RestController
@RequestMapping("/market")
@CrossOrigin("*")
public class MandiBhaavController {

    @Autowired
    MandiBhaavServiceImpl oBhaavServiceImpl;

    /**
     * Tesing    
     */
    @GetMapping("/testing")
    public String testingAPI(){
        return "Working";
    }

    /**
     * Fetch API for Main Market Price List
     * 
     * @param oMandiBhaavDto
     * @return ResponseEntity containing list of MandiBhaav Objects
     */
    @PostMapping("/fetchMarketPriceList")
    public ResponseEntity<List<MandiBhaavDto>> fetchMarketPriceList(@RequestBody MandiBhaavDto oMandiBhaavDto) {

        try {
            if (oMandiBhaavDto.getCommodityId() != null) {

                return oBhaavServiceImpl.fetchMarketPriceList(oMandiBhaavDto);
            } else {

                return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
            }

        } catch (Exception e) {
            // TODO: handle exception
            e.printStackTrace();
        }
        
        return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);

    }

    /**
     * Fetch API for market list according to given parameters
     * 
     * @param oMandiBhaavDto
     * @return List<MandiBhaavDto>
     */
    @PostMapping("/fetchMarketListForDistrict")
    public List<MandiBhaavDto> fetchMarketListForDistrict(@RequestBody MandiBhaavDto oMandiBhaavDto) {

        return oBhaavServiceImpl.fetchMarketListForDistrict(oMandiBhaavDto);
    }

}
