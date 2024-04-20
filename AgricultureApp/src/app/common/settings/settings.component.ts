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
  // languageChangeConfirmation:boolean = false;
  constructor(public dataStore:DataStoreService){}

  // changeLanguage(language:any){
  //   if(language=="Hindi"){
  //     this.dataStore.isHindi = true;
  //     this.dataStore.isEnglish = false;
  //   }
  //   else{
  //     this.dataStore.isHindi = false;
  //     this.dataStore.isEnglish = true;
  //   }
  // }

}
