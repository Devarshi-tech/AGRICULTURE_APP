import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { WeatherComponent } from '../weather/weather.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent,WeatherComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
