package com.agriculture.Models;

public class JwtRequest {

    private String contactNumber;

    private String password;

    public String getContactNumber() {
        return contactNumber;
    }

    public void setContactNumber(String contactNumber) {
        this.contactNumber = contactNumber;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public JwtRequest() {
    }

    public JwtRequest(String contactNumber, String password) {
        this.contactNumber = contactNumber;
        this.password = password;
    }

}
