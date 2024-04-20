import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataStoreService {

  constructor() { }

  isHomePage:boolean = true;
  isProfilePage:boolean = false;
  isMessagesPage:boolean = false;
  isPhotosPage:boolean = false;
  isSettingsPage:boolean = false;

  // Language Change
  isHindi:boolean = false;
  isEnglish:boolean = true;
}
