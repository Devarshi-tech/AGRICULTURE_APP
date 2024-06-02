package com.agriculture.Models;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Date;
import java.util.List;
// import java.util.;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

// import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "user")
public class User implements UserDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userid;

    private String name;

    private Integer farm;

    private String password;

    private Integer oneTimePassword;

    @JsonManagedReference
    @OneToMany(mappedBy = "user")
    private List<Labour> labours;

    @ManyToOne
    @JoinColumn(name = "roleid", referencedColumnName = "roleid")
    private Role role;

    private Boolean isActive;

    private Date createdDate;

    private Date modifiedDate;

    private String contactNumber;

    private String email;

    public void setPassword(String password) {
        this.password = password;
    }

    public Long getUserid() {
        return userid;
    }

    public void setUserid(Long userid) {
        this.userid = userid;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getFarm() {
        return farm;
    }

    public void setFarm(Integer farm) {
        this.farm = farm;
    }

    public Boolean getIsActive() {
        return isActive;
    }

    public void setIsActive(Boolean isActive) {
        this.isActive = isActive;
    }

    public Date getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(Date createdDate) {
        this.createdDate = createdDate;
    }

    public Date getModifiedDate() {
        return modifiedDate;
    }

    public void setModifiedDate(Date modifiedDate) {
        this.modifiedDate = modifiedDate;
    }

    public String getContactNumber() {
        return contactNumber;
    }

    public void setContactNumber(String contactNumber) {
        this.contactNumber = contactNumber;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public User() {
    }

    
    public User(Long userid, String name, Integer farm, String password, Integer oneTimePassword, List<Labour> labours,
            Role role, Boolean isActive, Date createdDate, Date modifiedDate, String contactNumber, String email) {
        this.userid = userid;
        this.name = name;
        this.farm = farm;
        this.password = password;
        this.oneTimePassword = oneTimePassword;
        this.labours = labours;
        this.role = role;
        this.isActive = isActive;
        this.createdDate = createdDate;
        this.modifiedDate = modifiedDate;
        this.contactNumber = contactNumber;
        this.email = email;
    }

    @SuppressWarnings("unchecked")
    @Override
    public Collection<GrantedAuthority> getAuthorities() {
        
        @SuppressWarnings("rawtypes")
        List<GrantedAuthority> authorities = new ArrayList();
        System.out.println(role.getRolename());
        authorities.add(new SimpleGrantedAuthority("ROLE_" + role.getRolename()));
        return authorities;
    }

    @Override
    public String getPassword() {
        return this.password;
    }

    @Override
    public String getUsername() {
        return this.contactNumber;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }

    public Integer getOneTimePassword() {
        return oneTimePassword;
    }

    public void setOneTimePassword(Integer oneTimePassword) {
        this.oneTimePassword = oneTimePassword;
    }

    public List<Labour> getLabours() {
        return labours;
    }

    public void setLabours(List<Labour> labours) {
        this.labours = labours;
    }

}
