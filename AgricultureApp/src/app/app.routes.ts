import { Routes } from '@angular/router';
import { MandiBhaavComponent } from './mandi-bhaav/mandi-bhaav.component';
import { HomeComponent } from './common/home/home.component';
import { SettingsComponent } from './common/settings/settings.component';
import { LaborCalculatorComponent } from './common/labour-calculator/labour-calculator.component';


export const routes: Routes = [
    { path: '',   redirectTo: '/home', pathMatch: 'full' },
    {path:'home',component:HomeComponent},
    {path:'mandibhaav' , component: MandiBhaavComponent},
    {path:'settings',component:SettingsComponent},
    {path:'labourCalculator',component:LaborCalculatorComponent}
]