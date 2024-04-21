import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AgricultureService {
  
   url :string= "http://localhost:8080/mandi/allMandiPriceList";

  constructor(private httpClient:HttpClient) { }

  public allMandiPriceList(){
    return this.httpClient.get(this.url);
  }

}
