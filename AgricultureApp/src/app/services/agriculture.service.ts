import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AgricultureService {

  url: string = "http://localhost:8080/";
  // url: string = "http://localhost:8081/market/"; // wrong url added just to avoid frquent backend calls 

  // url: string = "http://3.227.166.208:8080/market/";

  weatherURL: string = 'https://api.openweathermap.org/data/2.5/weather?lat=';
  WEATHER_API_KEY: string = "88e14476e272b09acd72b0661a073111";

  constructor(private httpClient: HttpClient, public cookieService: CookieService) { }

  // public testDataCurrentLocationMarketList(){
  //   return this.httpClient.get("assets/testDataCurrentLocationMarketList.json")
  // }

  /**
   * Fetch Filtered Price List of mandi
   * @param data 
   * @returns 
   */
  public allMandiPriceList(data: any) {
    return this.httpClient.post(this.url + "market/fetchMarketPriceList", data);
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
    return this.httpClient.post(this.url + "market/fetchMarketListForDistrict", obj);
  }

  getWeatherByCoordinates(latitude: number, longitude: number) {
    // Construct the API URL with latitude and longitude
    const wURL = `${this.weatherURL}${latitude}&lon=${longitude}&appid=${this.WEATHER_API_KEY}&units=metric`;
    // Return the HTTP GET request
    return this.httpClient.get(wURL);
  }

  //Generate token using credentials
  public generateToken(loginData: any) {
    return this.httpClient.post(this.url + "auth/login", loginData);
  }

  // Login user: set token in localStorage
  public loginUser(token: any) {
    this.cookieService.set("token", token);

    return true;
  }

  // isLogin: user is logged in or not
  public isLoggedIn() {

    // let tokenStr = (typeof localStorage != undefined?localStorage.getItem("token"):null);

    let tokenStr = this.cookieService.get("token");
    if (tokenStr == undefined || tokenStr == "" || tokenStr == null) {
      return false;
    }
    else {
      return true;
    }
  }

  // Logout: remove token from local storage
  public logout() {
   
    this.cookieService.delete("token");
    this.cookieService.delete("user");
    return true;
  }

  //get token : get token from local storage
  public getToken() {
    // return localStorage.getItem("token");
    return this.cookieService.get("token");
  }

  //set user details
  public setUser(user: any) {

    const userString = JSON.stringify(user); // Stringify the JSON object
    this.cookieService.set("user", userString); // Set the stringified JSON as the cookie value
  }

  getUser() {
    // const userDataStr = localStorage.getItem('userData');
    const userDataStr = this.cookieService.get('user');
    if (userDataStr) {
      try {
        const user = JSON.parse(userDataStr);
        return user;
      } catch (error) {
        console.error('Error parsing JSON data:', error);
        return null; // or handle the error in some other way
      }
    } else {
      this.logout();
      return null;
    }
  }

  //get user role
  public getUserRole() {
    let user = this.getUser();
    if (user != null) {
      return user.getRole().getRoleName();
    }
    return null;
  }

  public getCurrentUser() {
    const headers = new HttpHeaders()
      .set('Authorization', 'Bearer ' + this.getToken());
    return this.httpClient.get(this.url + "auth/current-user", { headers });
  }

  public createUser(user: any,isUserEditFlag:boolean,isPasswordChanged:boolean) {
    const headers = new HttpHeaders()
      .set('isUserEditFlag', isUserEditFlag.toString())
      .set('isPasswordChanged',isPasswordChanged.toString());
    return this.httpClient.post(this.url + "user/create-user", user,{headers});
  }

  public uniqueUserValidation(user:any){
    return this.httpClient.post(this.url + "user/unique-user" ,user)
  }

 

}
