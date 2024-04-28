import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { MandiBhaavComponent } from './app/mandi-bhaav/mandi-bhaav.component';
import { HomeComponent } from './app/common/home/home.component';
import { SettingsComponent } from './app/common/settings/settings.component';
import { LaborCalculatorComponent } from './app/common/labour-calculator/labour-calculator.component';

bootstrapApplication(AppComponent,
  {
    providers:[importProvidersFrom([BrowserAnimationsModule]),provideHttpClient(),provideRouter([
      { path: '',   redirectTo: '/home', pathMatch: 'full' },
    {path:'home',component:HomeComponent},
    {path:'mandibhaav' , component: MandiBhaavComponent},
    {path:'settings',component:SettingsComponent},
    {path:'labourCalculator',component:LaborCalculatorComponent}
    ])]
  }
)
  .catch((err) => console.error(err));
