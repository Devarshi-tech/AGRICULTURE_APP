import { Injectable } from '@angular/core';

// user interface 
// interface user {
//   name: String,
//   access: String,
//   contactNumber: String,
//   email:String,
//   farm:number
// };

@Injectable({
  providedIn: 'root'
})
export class DataStoreService {
  isLoggedIn: boolean = false;
  isUserEditFlag: boolean = false;
  messageAlert: string = "";
  messageAlertSevierity: string[] = [];
  showHeaderFooter: boolean = true;

  constructor() { }

  activeFooterIconNumber: number = 0; // Home=0, Mandi=1, Calculator=2, info=3, Settings=4 

  globalSearchActive: boolean = false;

  currentLocation: any = {
    city: "",
    state: "Madhya Pradesh",
  }

  currentPage: String = "";

  activeUserSession: any = {
    name: "",
    contactNumber: "",
    email: "",
    access: "",
    farm: 0
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
