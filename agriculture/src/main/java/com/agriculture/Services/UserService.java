package com.agriculture.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
// import org.springframework.security.core.userdetails.User;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.agriculture.Models.Role;
import com.agriculture.Models.User;
import com.agriculture.Repositories.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    public String createUser(User user,Boolean isUserEditFlag,Boolean isPasswordChanged) {
        if(isUserEditFlag){

            if(isPasswordChanged){
                user.setPassword(passwordEncoder().encode(user.getPassword()));                
            }
            else{
                user.setPassword(user.getPassword());
            }
        }
        else{
            user.setPassword(passwordEncoder().encode(user.getPassword()));
        }
        
        Role role = new Role();

        role.setRoleid(2);
        user.setRole(role);
        userRepository.save(user);
        return user.getContactNumber();
    }

    public Boolean uniqueUserValidation(User user){
        User u1  = userRepository.findByContactNumber(user.getContactNumber());
        return u1==null;
    }

    public List<User> getAllUser() {
        // TODO Auto-generated method stub
        // throw new UnsupportedOperationException("Unimplemented method 'getAllUser'");
        return userRepository.findAll();
    }

}
