import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AgricultureService {
  
   url :string= "http://localhost:8080/market/";
  
  constructor(private httpClient:HttpClient) { }

  public allMandiPriceList(data:any){
    return this.httpClient.post(this.url+"fetchMarketPriceList",data);
  }

  /**
   * Fetch all states
   * @returns 
   */
  fetchAllStates(){
    return this.httpClient.get<any[]>("assets/states.json");
  }

  /**
   * Fetch All commodities
   * @returns 
   */
  fetchAllCommodities(){
    return this.httpClient.get<any[]>("assets/commodities.json");
  }

  /**
   * Fetch Market List
   * @param obj 
   * @returns 
   */
  fetchMarketListForDistrict(obj:any){
    return this.httpClient.post(this.url+"fetchMarketListForDistrict",obj);
  }

}
