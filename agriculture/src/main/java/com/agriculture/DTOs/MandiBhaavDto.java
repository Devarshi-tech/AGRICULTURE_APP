package com.agriculture.DTOs;

public class MandiBhaavDto {

    private Integer marketId;
    private String marketName;
    private String stateCode;
    private String stateName;
    private String priceStartDate;
    private String priceEndDate;
    private Integer districtId;
    private String districtName;
    private Integer commodityId;
    private String commodityName;
    private String varietyOfCommoditiy;
    private String gradeOfCommoditiy;
    private Integer minPriceOfCommoditiy;
    private Integer maxPriceOfCommoditiy;
    private Integer modalPriceOfCommoditiy;
    private String responseMessage;

    public MandiBhaavDto(Integer marketId, String marketName, String stateCode, String stateName, String priceStartDate,
            String priceEndDate, Integer districtId, String districtName, Integer commodityId, String commodityName,
            String varietyOfCommoditiy, String gradeOfCommoditiy, Integer minPriceOfCommoditiy,
            Integer maxPriceOfCommoditiy, Integer modalPriceOfCommoditiy) {
        this.marketId = marketId;
        this.marketName = marketName;
        this.stateCode = stateCode;
        this.stateName = stateName;
        this.priceStartDate = priceStartDate;
        this.priceEndDate = priceEndDate;
        this.districtId = districtId;
        this.districtName = districtName;
        this.commodityId = commodityId;
        this.commodityName = commodityName;
        this.varietyOfCommoditiy = varietyOfCommoditiy;
        this.gradeOfCommoditiy = gradeOfCommoditiy;
        this.minPriceOfCommoditiy = minPriceOfCommoditiy;
        this.maxPriceOfCommoditiy = maxPriceOfCommoditiy;
        this.modalPriceOfCommoditiy = modalPriceOfCommoditiy;
    }

    public MandiBhaavDto() {
    }

    public Integer getMarketId() {
        return marketId;
    }

    public void setMarketId(Integer marketId) {
        this.marketId = marketId;
    }

    public String getMarketName() {
        return marketName;
    }

    public void setMarketName(String marketName) {
        this.marketName = marketName;
    }

    public String getStateCode() {
        return stateCode;
    }

    public void setStateCode(String stateCode) {
        this.stateCode = stateCode;
    }

    public String getStateName() {
        return stateName;
    }

    public void setStateName(String stateName) {
        this.stateName = stateName;
    }

    public String getPriceStartDate() {
        return priceStartDate;
    }

    public void setPriceStartDate(String priceStartDate) {
        this.priceStartDate = priceStartDate;
    }

    public String getPriceEndDate() {
        return priceEndDate;
    }

    public void setPriceEndDate(String priceEndDate) {
        this.priceEndDate = priceEndDate;
    }

    public Integer getDistrictId() {
        return districtId;
    }

    public void setDistrictId(Integer districtId) {
        this.districtId = districtId;
    }

    public String getDistrictName() {
        return districtName;
    }

    public void setDistrictName(String districtName) {
        this.districtName = districtName;
    }

    public Integer getCommodityId() {
        return commodityId;
    }

    public void setCommodityId(Integer commodityId) {
        this.commodityId = commodityId;
    }

    public String getCommodityName() {
        return commodityName;
    }

    public void setCommodityName(String commodityName) {
        this.commodityName = commodityName;
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

    public String getResponseMessage() {
        return responseMessage;
    }

    public void setResponseMessage(String responseMessage) {
        this.responseMessage = responseMessage;
    }

}
