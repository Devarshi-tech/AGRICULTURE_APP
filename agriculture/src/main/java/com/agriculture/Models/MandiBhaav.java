package com.agriculture.Models;

import java.util.Date;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
/**
 * MandiBhaav Entity to manage all the market rates for all the commodities accross India
 */
@Entity
@Table(name = "mandis")
public class MandiBhaav {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer mandiID;
    private Integer marketId;
    private String stateCode;
    private Date priceDate;
    private Integer districtId;
    private Integer commodityId;
    private String varietyOfCommoditiy;
    private String gradeOfCommoditiy;
    private Integer minPriceOfCommoditiy;
    private Integer maxPriceOfCommoditiy;
    private Integer modalPriceOfCommoditiy;
    public Integer getMandiID() {
        return mandiID;
    }
    public void setMandiID(Integer mandiID) {
        this.mandiID = mandiID;
    }
    public Integer getMarketId() {
        return marketId;
    }
    public void setMarketId(Integer marketId) {
        this.marketId = marketId;
    }
    
    public Date getPriceDate() {
        return priceDate;
    }
    public void setPriceDate(Date priceDate) {
        this.priceDate = priceDate;
    }
    public Integer getDistrictId() {
        return districtId;
    }
    public void setDistrictId(Integer districtId) {
        this.districtId = districtId;
    }
    public Integer getCommodityId() {
        return commodityId;
    }
    public void setCommodityId(Integer commodityId) {
        this.commodityId = commodityId;
    }
    public String getVarietyOfCommoditiy() {
        return varietyOfCommoditiy;
    }
    public void setVarietyOfCommoditiy(String varietyOfCommoditiy) {
        this.varietyOfCommoditiy = varietyOfCommoditiy;
    }
    public String getGradeOfCommoditiy() {
        return gradeOfCommoditiy;
    }
    public void setGradeOfCommoditiy(String gradeOfCommoditiy) {
        this.gradeOfCommoditiy = gradeOfCommoditiy;
    }
    public Integer getMinPriceOfCommoditiy() {
        return minPriceOfCommoditiy;
    }
    public void setMinPriceOfCommoditiy(Integer minPriceOfCommoditiy) {
        this.minPriceOfCommoditiy = minPriceOfCommoditiy;
    }
    public Integer getMaxPriceOfCommoditiy() {
        return maxPriceOfCommoditiy;
    }
    public void setMaxPriceOfCommoditiy(Integer maxPriceOfCommoditiy) {
        this.maxPriceOfCommoditiy = maxPriceOfCommoditiy;
    }
    public Integer getModalPriceOfCommoditiy() {
        return modalPriceOfCommoditiy;
    }
    public void setModalPriceOfCommoditiy(Integer modalPriceOfCommoditiy) {
        this.modalPriceOfCommoditiy = modalPriceOfCommoditiy;
    }
   
    public MandiBhaav() {
    }
    public String getStateCode() {
        return stateCode;
    }
    public void setStateCode(String stateCode) {
        this.stateCode = stateCode;
    }
    public MandiBhaav(Integer mandiID, Integer marketId, String stateCode, Date priceDate, Integer districtId,
            Integer commodityId, String varietyOfCommoditiy, String gradeOfCommoditiy, Integer minPriceOfCommoditiy,
            Integer maxPriceOfCommoditiy, Integer modalPriceOfCommoditiy) {
        this.mandiID = mandiID;
        this.marketId = marketId;
        this.stateCode = stateCode;
        this.priceDate = priceDate;
        this.districtId = districtId;
        this.commodityId = commodityId;
        this.varietyOfCommoditiy = varietyOfCommoditiy;
        this.gradeOfCommoditiy = gradeOfCommoditiy;
        this.minPriceOfCommoditiy = minPriceOfCommoditiy;
        this.maxPriceOfCommoditiy = maxPriceOfCommoditiy;
        this.modalPriceOfCommoditiy = modalPriceOfCommoditiy;
    }

    

    }
