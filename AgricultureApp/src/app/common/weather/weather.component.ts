import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css'
})
export class WeatherComponent implements OnInit {
  currentTemperature: number = 0;
  city: string = '';
  forecast: any[] = [];
  isForecastExpanded: boolean = false;

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    // Fetch current temperature and city
    this.currentTemperature = this.weatherService.getCurrentTemperature();
    this.city = this.weatherService.getCity();

    
  }

}