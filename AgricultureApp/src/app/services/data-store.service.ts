import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataStoreService {

  constructor() { }

  isHomePage: boolean = true;
  isProfilePage: boolean = false;
  isMessagesPage: boolean = false;
  isPhotosPage: boolean = false;
  isSettingsPage: boolean = false;

  currentLocation:any= {
    city: "",
    state: "Madhya Pradesh",
  }

  // Language Change
  isHindi: boolean = false;
  isEnglish: boolean = true;

  latestMandiBhaavList: any = [];

  /**
   * Common method to filter given array(using field = name) according to given event and returns the filtered array
   * @param event 
   * @param array 
   * @returns 
   */
  filterSuggestions(event: any, array: any[]): any[] {
    let filtered: any[] = [];
    for (let i = 0; i < array.length; i++) {
      let item = array[i];
      if (item.name.toLowerCase().indexOf((event.query).toString().toLowerCase()) != -1) {
        filtered.push(item);
      }
    }
    return filtered;
  }
}
