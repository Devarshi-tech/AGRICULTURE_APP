package com.agriculture.SecurityConfig;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.agriculture.Services.UserService;

@Configuration
public class SecurityConfig {

    @Autowired
    private JwtAuthenticationEntryPoint point;

    @Autowired
    private JwtAuthenticationFilter filter;

    @Autowired
    public UserDetailsService userDetailsService;

    @Autowired
    private UserService userService;

    @Bean
    public DaoAuthenticationProvider doDaoAuthenticationProvider() {
        DaoAuthenticationProvider daoAuthenticationProvider = new DaoAuthenticationProvider();
        daoAuthenticationProvider.setUserDetailsService(userDetailsService);
        daoAuthenticationProvider.setPasswordEncoder(userService.passwordEncoder());
        return daoAuthenticationProvider;
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity httpSecurity) throws Exception {
        httpSecurity.csrf(csrf -> csrf.disable())
                // .cors(cors -> cors.disable())
                .authorizeHttpRequests(authHttpReq -> authHttpReq

                        .requestMatchers("/user/create-user", "/auth/login", "/market/fetchMarketListForDistrict",
                                "/market/fetchMarketPriceList", "/market/fetchMarketPriceList",
                                "/user/unique-user","/user/send-otp","/user/verify-otp")
                        .permitAll()
                        .requestMatchers("/user/testing-normal-user", "/user/testing-normal-user1", "/user/logged-in-user")
                        .hasRole("NORMAL")
                        .requestMatchers("/user/testing-admin-user", "/user/logged-in-user")
                        .hasRole("ADMIN")
                        .requestMatchers("/labour/add")
                        .authenticated()
                        .anyRequest()
                        .authenticated())
                        
                .exceptionHandling(ex -> ex.authenticationEntryPoint(point))
                // STATELESS policy -> we are not storing anything on server
                .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS));
        httpSecurity.addFilterBefore(filter, UsernamePasswordAuthenticationFilter.class);

        return httpSecurity.build();
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration builder) throws Exception {
        return builder.getAuthenticationManager();
    }
}
