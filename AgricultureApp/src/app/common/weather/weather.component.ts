import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css',
  providers:[WeatherService]
})
export class WeatherComponent implements OnInit {
  defaultLatitude: number = 21.8257; // Default latitude (Khargone City)
  defaultLongitude: number = 75.6184; // Default longitude (khargone City)
  latitude: number = 0;
  longitude: number = 0;
  errorMessage: string = '';
  weatherData: any;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    if (typeof navigator !== 'undefined' && navigator.geolocation) {
      this.getLocation();
    } else {
      // Handle the case when navigator or geolocation is not available
      this.errorMessage = "Geolocation is not supported by this browser.";
    }
  }
  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.latitude = position.coords.latitude;
          this.longitude = position.coords.longitude;
          console.log("Latitude: ", this.latitude);
          console.log("Longitude: ", this.longitude);
          this.getWeatherByCoordinates(this.latitude, this.longitude);
        },
        (error) => {
          switch(error.code) {
            case error.PERMISSION_DENIED:
              // If permission is denied, use default location
              this.latitude = this.defaultLatitude;
              this.longitude = this.defaultLongitude;
              this.getWeatherByCoordinates(this.defaultLatitude, this.defaultLongitude);
              break;
            case error.POSITION_UNAVAILABLE:
              this.errorMessage = "Location information is unavailable.";
              break;
            case error.TIMEOUT:
              this.errorMessage = "The request to get user location timed out.";
              break;
            default:
              this.errorMessage = "An unknown error occurred.";
              break;
          }
        }
      );
    } else {
      this.errorMessage = "Geolocation is not supported by this browser.";
    }
  }

  getWeatherByCoordinates(latitude: number, longitude: number) {
    this.weatherService.getWeatherByCoordinates(latitude, longitude).subscribe((data: any) => {
      // console.log("Weather Data:", data);
      this.weatherData = data;
    });
  }

  getWeatherIconUrl(iconCode: string): string {
    // Construct the URL for the weather icon
    return `http://openweathermap.org/img/w/${iconCode}.png`;
  }
  
  
}