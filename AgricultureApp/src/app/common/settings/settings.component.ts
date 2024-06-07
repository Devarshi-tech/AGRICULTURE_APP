import { Component } from '@angular/core';
import { DataStoreService } from '../../services/data-store.service';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent {

  constructor(public dataStore:DataStoreService){}

  ngOnInit(){
    this.dataStore.activeFooterIconNumber= 4;
  }


}
