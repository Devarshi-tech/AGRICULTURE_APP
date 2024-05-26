package com.agriculture.Models;

import lombok.Builder;

@Builder
public class JwtResponse {

    private String jwtToken;

    private String contactNumber;

    public String getJwtToken() {
        return jwtToken;
    }

    public void setJwtToken(String jwtToken) {
        this.jwtToken = jwtToken;
    }

    public String getContactNumber() {
        return contactNumber;
    }

    public void setContactNumber(String contactNumber) {
        this.contactNumber = contactNumber;
    }

    public JwtResponse(String jwtToken, String contactNumber) {
        this.jwtToken = jwtToken;
        this.contactNumber = contactNumber;
    }

    public JwtResponse() {
    }

}
