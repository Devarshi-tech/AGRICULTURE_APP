package com.agriculture.Models;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "role")
public class Role {

    @Id
    private Integer roleid;
    private String rolename;
    private Boolean isactive;
    
    public Integer getRoleid() {
        return roleid;
    }
    public void setRoleid(Integer roleid) {
        this.roleid = roleid;
    }
    public String getRolename() {
        return rolename;
    }
    public void setRolename(String rolename) {
        this.rolename = rolename;
    }
    public Boolean getIsactive() {
        return isactive;
    }
    public void setIsactive(Boolean isactive) {
        this.isactive = isactive;
    }
    public Role(Integer roleid, String rolename, Boolean isactive) {
        this.roleid = roleid;
        this.rolename = rolename;
        this.isactive = isactive;
    }
    public Role() {
    }

    

}
