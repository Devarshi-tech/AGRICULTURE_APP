package com.agriculture.Models;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "labour")
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Labour {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long labourId;
    private String labourName;
    private Integer totalPresents;
    private Integer totalAmountPaid;

    @OneToMany(mappedBy = "labour")
    private List<Attendance> attendances;

    @OneToMany(mappedBy = "labour")
    private List<Transaction> transactions;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "userId")
    private User user;

}
