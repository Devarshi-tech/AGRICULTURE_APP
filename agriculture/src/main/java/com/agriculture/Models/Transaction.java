package com.agriculture.Models;

import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "transaction")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Transaction {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long transactionId;
    private String transactionTitle;

    @ManyToOne
    @JoinColumn(name = "labourId")
    private Labour labour;

    @ManyToOne
    @JoinColumn(name = "userId")
    private User user;

    private Date transactionDate;

    private Integer ratePerDay;

    private Integer amount;

    private Integer paymentType; // debit/credit

}
