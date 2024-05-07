// weather.service.ts

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const URL ='https://api.openweathermap.org/data/2.5/weather?lat=';
const API_KEY="88e14476e272b09acd72b0661a073111";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http:HttpClient,) { }

  getWeatherByCoordinates(latitude: number, longitude: number) {
    // Construct the API URL with latitude and longitude
    const url = `${URL}${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
    // Return the HTTP GET request
    return this.http.get(url);
  }
}
