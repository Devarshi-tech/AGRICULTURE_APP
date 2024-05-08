package com.agriculture.Services;

import java.io.IOException;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.List;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.agriculture.DTOs.MandiBhaavDto;

@Service
public class MandiBhaavServiceImpl {

    /**
     * Fetch Markets for particular District
     * @param oMandiBhaavDto
     * @return
     */
    public List<MandiBhaavDto> fetchMarketListForDistrict(MandiBhaavDto oMandiBhaavDto) {

        List<MandiBhaavDto> marketList = new ArrayList<>();

        try {

            String url = "https://agmarknet.gov.in/SearchCmmMkt.aspx?" +
                    "Tx_Commodity="
                    + URLEncoder.encode(oMandiBhaavDto.getCommodityId().toString(), StandardCharsets.UTF_8.toString()) +
                    "&Tx_State=" + URLEncoder.encode(oMandiBhaavDto.getStateCode(), StandardCharsets.UTF_8.toString()) +
                    "&Tx_District="
                    + URLEncoder.encode(oMandiBhaavDto.getDistrictId().toString(), StandardCharsets.UTF_8.toString()) +
                    "&Tx_Market=0" + "&DateFrom=" + URLEncoder.encode("24-Apr-2024", StandardCharsets.UTF_8.toString())
                    + "&DateTo=" + URLEncoder.encode("24-Apr-2024", StandardCharsets.UTF_8.toString())
                    +
                    "&Fr_Date=" + URLEncoder.encode("24-Apr-2024", StandardCharsets.UTF_8.toString())
                    + "&To_Date=" + URLEncoder.encode("24-Apr-2024", StandardCharsets.UTF_8.toString())
                    + "&Tx_Trend=0" +
                    "&Tx_CommodityHead="
                    + URLEncoder.encode(oMandiBhaavDto.getCommodityName(), StandardCharsets.UTF_8.toString()) +
                    "&Tx_StateHead="
                    + URLEncoder.encode(oMandiBhaavDto.getStateName(), StandardCharsets.UTF_8.toString())
                    + "&Tx_DistrictHead="
                    + URLEncoder.encode(oMandiBhaavDto.getDistrictName(), StandardCharsets.UTF_8.toString());

            Document document;
            document = Jsoup.connect(url).get();
            Elements mandisElements = document.select("#ddlMarket option");

            for (int i = 0; i < mandisElements.size(); i++) {
                MandiBhaavDto dto = new MandiBhaavDto();
                Element element = mandisElements.get(i);
            
                Integer value = Integer.parseInt(element.select("option").attr("value"));
                dto.setMarketId(value);
                dto.setMarketName(element.select("option").text());
                if (value != 0) {
                    marketList.add(dto);
                }
            }

        } catch (Exception e) {
            e.printStackTrace();
        }

        return marketList;
    }

    /**
     * Fetch API for Main Market Price List
     * 
     * @param oMandiBhaavDto
     * @return ResponseEntity containing list of MandiBhaav Objects
     */
    public ResponseEntity<List<MandiBhaavDto>> fetchMarketPriceList(MandiBhaavDto oMandiBhaavDto) {

        List<MandiBhaavDto> mandiList = new ArrayList<>();

        try {
            String url = "https://agmarknet.gov.in/SearchCmmMkt.aspx?" +
                    "Tx_Commodity="
                    + URLEncoder.encode(oMandiBhaavDto.getCommodityId().toString(), StandardCharsets.UTF_8.toString()) +
                    "&Tx_State=" + URLEncoder.encode(oMandiBhaavDto.getStateCode(), StandardCharsets.UTF_8.toString()) +
                    "&Tx_District="
                    + URLEncoder.encode(oMandiBhaavDto.getDistrictId().toString(), StandardCharsets.UTF_8.toString()) +
                    "&Tx_Market="
                    + URLEncoder.encode(oMandiBhaavDto.getMarketId().toString(), StandardCharsets.UTF_8.toString())
                    + "&DateFrom="
                    + URLEncoder.encode(oMandiBhaavDto.getPriceStartDate().toString(),
                            StandardCharsets.UTF_8.toString())
                    + "&DateTo="
                    + URLEncoder.encode(oMandiBhaavDto.getPriceEndDate().toString(), StandardCharsets.UTF_8.toString())
                    +
                    "&Fr_Date="
                    + URLEncoder.encode(oMandiBhaavDto.getPriceStartDate().toString(),
                            StandardCharsets.UTF_8.toString())
                    + "&To_Date="
                    + URLEncoder.encode(oMandiBhaavDto.getPriceEndDate().toString(), StandardCharsets.UTF_8.toString())
                    + "&Tx_Trend=0" +
                    "&Tx_CommodityHead="
                    + URLEncoder.encode(oMandiBhaavDto.getCommodityName(), StandardCharsets.UTF_8.toString()) +
                    "&Tx_StateHead="
                    + URLEncoder.encode(oMandiBhaavDto.getStateName(), StandardCharsets.UTF_8.toString())
                    + "&Tx_DistrictHead="
                    + URLEncoder.encode(oMandiBhaavDto.getDistrictName(), StandardCharsets.UTF_8.toString())
                    + "&Tx_MarketHead="
                    + URLEncoder.encode(oMandiBhaavDto.getMarketName(), StandardCharsets.UTF_8.toString());

            Document document;
            document = Jsoup.connect(url).get();

            Elements mandisElements = document.select("table.tableagmark_new tbody tr");

            for (int i = 0; i < mandisElements.size(); i++) {
                
                Element element = mandisElements.get(i);
                
            try{
                if (element.select("span#cphBody_GridPriceData_Labdistrict_name_" + (i - 1)).text() != null) {
                    MandiBhaavDto oBhaavDto = new MandiBhaavDto();
   
                    oBhaavDto.setDistrictName(
                            element.select("span#cphBody_GridPriceData_Labdistrict_name_" + (i - 1)).text());
                    oBhaavDto.setMarketName(
                            element.select("span#cphBody_GridPriceData_LabdMarketName_" + (i - 1)).text());
                    oBhaavDto.setCommodityName(
                            element.select("span#cphBody_GridPriceData_Labcomm_name_" + (i - 1)).text());
   
                    Integer minPrice = Integer.parseInt(
                            (i - 1) > -1 ? element.select("span#cphBody_GridPriceData_LabMinPrice_" + (i - 1)).text()
                                    : "0");
   
                    oBhaavDto.setMinPriceOfCommoditiy(minPrice);
   
                    Integer maxPrice = Integer.parseInt(
                            (i - 1) > -1 ? element.select("span#cphBody_GridPriceData_Labmaxpric_" + (i - 1)).text()
                                    : "0");
                    oBhaavDto.setMaxPriceOfCommoditiy(maxPrice);
   
                    Integer modalPrice = Integer.parseInt(
                            (i - 1) > -1 ? element.select("span#cphBody_GridPriceData_LabModalpric_" + (i - 1)).text()
                                    : "0");
                    oBhaavDto.setModalPriceOfCommoditiy(modalPrice);
   
                    oBhaavDto.setPriceEndDate(
                            element.select("span#cphBody_GridPriceData_LabReportedDate_" + (i - 1)).text());
   
                    mandiList.add(oBhaavDto);
                }
            
            }
            catch(Exception e){
                e.printStackTrace();
            }
            }
        } catch (Exception e) {
            e.printStackTrace();
            List<MandiBhaavDto> emptyList = new ArrayList<>();
            oMandiBhaavDto.setResponseMessage("Data Not Found");
            emptyList.add(oMandiBhaavDto);
            return new ResponseEntity<>(emptyList,HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(mandiList, HttpStatus.OK);

    }

}

