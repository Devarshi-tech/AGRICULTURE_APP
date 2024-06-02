package com.agriculture.Controllers;

import java.security.Principal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.agriculture.Models.User;
// import com.agriculture.Services.CustomUserDetailsService;
import com.agriculture.Services.UserService;

@RestController
@RequestMapping("/user")
@CrossOrigin("*")
public class UserController {

    @Autowired
    private UserService userService;

    // @Autowired
    // private CustomUserDetailsService customUserDetailsService;

    @Autowired
    AuthController authController;

    /**
     * Tesing for normal user
     */
    @GetMapping("/testing-normal-user")
    public String testingAPINormalUser() {
        return "Normal user Working";
    }

    /**
     * Tesing for normal user1
     */
    @GetMapping("/testing-normal-user1")
    public String testingAPINormalUser1() {
        return "Normal user 1 Working";
    }

    /**
     * Tesing for admin user
     */
    @GetMapping("/testing-admin-user")
    public String testingAPIAdminUser() {
        return "Admin user Working";
    }

    @GetMapping("/logged-in-user")
    public String getLoggedInUser(Principal principal) {
        if (principal == null) {
            return "no user found";
        }
        System.out.println("inside logged in user");
        return principal.getName();
    }

    @PostMapping("/create-user")
    public String createUser(@RequestBody User user, @RequestHeader("isUserEditFlag") Boolean isUserEditFlag) {
        return userService.createUser(user, isUserEditFlag);
    }

    @PostMapping("/unique-user")
    public Boolean uniqueUserValidation(@RequestBody User user) {
        return userService.uniqueUserValidation(user);
    }


}
