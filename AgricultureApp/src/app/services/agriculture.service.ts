import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AgricultureService {

  // url: string = "http://localhost:8080/market/"; 
  url: string = "http://localhost:8081/market/"; // wrong url added just to avoid frquent backend calls 

  // url: string = "http://3.227.166.208:8080/market/";

  weatherURL: string = 'https://api.openweathermap.org/data/2.5/weather?lat=';
  WEATHER_API_KEY: string = "88e14476e272b09acd72b0661a073111";

  constructor(private httpClient: HttpClient) { }

  // public testDataCurrentLocationMarketList(){
  //   return this.httpClient.get("assets/testDataCurrentLocationMarketList.json")
  // }

  /**
   * Fetch Filtered Price List of mandi
   * @param data 
   * @returns 
   */
  public allMandiPriceList(data: any) {
    return this.httpClient.post(this.url + "fetchMarketPriceList", data);
  }


  /**
   * Fetch all states
   * @returns  
   */
  fetchAllStates() {
    return this.httpClient.get<any[]>("assets/states.json");
  }

  /**
   * Fetch All commodities
   * @returns 
   */
  fetchAllCommodities() {
    return this.httpClient.get<any[]>("assets/commodities.json");
  }

  /**
   * Fetch Market List
   * @param obj 
   * @returns 
   */
  fetchMarketListForDistrict(obj: any) {
    return this.httpClient.post(this.url + "fetchMarketListForDistrict", obj);
  }

  getWeatherByCoordinates(latitude: number, longitude: number) {
    // Construct the API URL with latitude and longitude
    const wURL = `${this.weatherURL}${latitude}&lon=${longitude}&appid=${this.WEATHER_API_KEY}&units=metric`;
    // Return the HTTP GET request
    return this.httpClient.get(wURL);
  }

}
