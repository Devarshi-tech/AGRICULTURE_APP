package com.agriculture.DTOs;

import java.util.List;

import com.agriculture.Models.Labour;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class UserDto {

    private Long userid;
    private String name;
    private String contactNumber;
    private String email;
    private List<Labour> labours;

}
