// weather.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor() { }

  getCurrentTemperature(): number {
    // Mock current temperature
    return 25; // Assume current temperature is 25°C
  }

  getCity(): string {
    // Mock city name
    return 'New York'; // Return a mock city name
  }

  getWeatherForecast(): any[] {
    // Mock data for 7-day weather forecast
    return [
      { day: 'Monday', temperature: 22 },
      { day: 'Tuesday', temperature: 23 },
      { day: 'Wednesday', temperature: 24 },
      { day: 'Thursday', temperature: 25 },
      { day: 'Friday', temperature: 26 },
      { day: 'Saturday', temperature: 27 },
      { day: 'Sunday', temperature: 28 }
    ];
  }
}
