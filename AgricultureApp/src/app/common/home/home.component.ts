import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { WeatherComponent } from '../weather/weather.component';
import { AgricultureService } from '../../services/agriculture.service';
import { DatePipe } from '@angular/common';
import { CarouselComponent } from '../carousel/carousel.component';
import { DataStoreService } from '../../services/data-store.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, WeatherComponent, CarouselComponent],
  providers: [DatePipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private datepipe: DatePipe, private agricultureService: AgricultureService,
    public dataStore:DataStoreService
  ) { }
  date: Date = new Date();
  oneDayBeforeDate: Date = new Date();
  latestDate: string | null = "";
  districtsList: any = [];
  mandiList: any = [];
  currentLocation: any = {};
  showSearchLoader:boolean = false;
  tempList: any = [];
  tempMarketList: any = [];
  currentLocationDefaultMandiPriceList: any = [];

  ngOnInit() {

    const currentDate = new Date();

    // Subtract 1 day from the current date
    this.oneDayBeforeDate = new Date(currentDate);
    this.oneDayBeforeDate.setDate(currentDate.getDate() - 1);

    let favCommoditiesList = [
      { id: "1", name: "Wheat" },
      { id: 13, name: "Soyabean" }
    ]

    if(this.dataStore.latestMandiBhaavList==null || this.dataStore.latestMandiBhaavList.length==0){
      setTimeout(() => {

        this.getLatestMandiRates(favCommoditiesList, this.dataStore.currentLocation);
      }, 1000);
    }

  }

  /**
   * Get Mandi Rates for Current Location
   * @param favCommodities 
   * @param currentLocation 
   */
  getLatestMandiRates(favCommodities: any, currentLocation: any) {

    favCommodities.forEach((element: any) => {
      
      let tempObj: any = {}
      tempObj.stateCode = "MP";
      tempObj.stateName = currentLocation.state;
      tempObj.priceEndDate = this.datepipe.transform(this.date.getTime(), "dd-MMM-yyyy");
      tempObj.priceStartDate = this.datepipe.transform(this.oneDayBeforeDate.getTime(), "dd-MMM-yyyy");
      tempObj.districtId = 6;
      tempObj.districtName = currentLocation.city;
      tempObj.commodityId = element.id;
      tempObj.commodityName = element.name;
      tempObj.marketId = null;
      tempObj.marketName = null;

      this.agricultureService.fetchMarketListForDistrict(tempObj).subscribe(data => {

        this.tempMarketList = data;

        this.tempMarketList.forEach((element1: any) => {

          let tempObj1: any = {}
          tempObj1.stateCode = "MP";
          tempObj1.stateName = currentLocation.state;
          tempObj1.priceEndDate = this.datepipe.transform(this.date.getTime(), "dd-MMM-yyyy");
          tempObj1.priceStartDate = this.datepipe.transform(this.oneDayBeforeDate.getTime(), "dd-MMM-yyyy");
          tempObj1.districtId = 6;
          tempObj1.districtName = currentLocation.city;
          tempObj1.commodityId = element.id;
          tempObj1.commodityName = element.name;
          tempObj1.marketId = element1.marketId;
          tempObj1.marketName = element1.marketName;
          

          this.agricultureService.allMandiPriceList(tempObj1).subscribe(data2 => {
            let tempMandiPriceList: any = [];
            tempMandiPriceList = data2;
            
           tempMandiPriceList.forEach((mandiPrice:any) => {
            if(mandiPrice.commodityName!="" && mandiPrice.responseCode!=404){
              this.currentLocationDefaultMandiPriceList.push(
                {
                  commodityName:mandiPrice.commodityName,
                  marketName
                    :
                    mandiPrice.marketName,
                  maxPriceOfCommoditiy
                    :
                    mandiPrice.maxPriceOfCommoditiy,
                  minPriceOfCommoditiy
                    :
                    mandiPrice.minPriceOfCommoditiy,
                  modalPriceOfCommoditiy
                    :
                    mandiPrice.modalPriceOfCommoditiy,
                  priceEndDate
                    :
                    mandiPrice.priceEndDate
                }
              )
            }
           });

          
          });

        });
       
      })
    });

    setTimeout(() => {
      this.showSearchLoader= true;
      this.processData(this.currentLocationDefaultMandiPriceList);
    }, 2000);

  }
  marketPrices:any=[];
  processData(data: any[]): void {
    this.marketPrices =[];
    const pricesByMarketAndCommodity: { [market: string]: { [commodity: string]: any } } = {};
  
    data.forEach(entry => {
      const market = entry.marketName;
      const commodity = entry.commodityName;
      const priceEndDate = entry.priceEndDate;
  
      if (!pricesByMarketAndCommodity[market]) {
        pricesByMarketAndCommodity[market] = {};
      }
  
      // Check if there's already an entry for this commodity
      const existingEntry = pricesByMarketAndCommodity[market][commodity];
      if (!existingEntry || priceEndDate > existingEntry.priceEndDate) {
        pricesByMarketAndCommodity[market][commodity] = {
          priceEndDate: priceEndDate,
          maxPrice: entry.maxPriceOfCommoditiy,
          minPrice: entry.minPriceOfCommoditiy,
          modalPrice: entry.modalPriceOfCommoditiy
        };
      }
    });
  
    for (const market in pricesByMarketAndCommodity) {
      if (pricesByMarketAndCommodity.hasOwnProperty(market)) {
        const marketPrices = Object.keys(pricesByMarketAndCommodity[market]).map(commodity => {
          return {
            commodity: commodity,
            priceEndDate: pricesByMarketAndCommodity[market][commodity].priceEndDate,
            maxPrice: pricesByMarketAndCommodity[market][commodity].maxPrice,
            minPrice: pricesByMarketAndCommodity[market][commodity].minPrice,
            modalPrice: pricesByMarketAndCommodity[market][commodity].modalPrice
          };
        });
  
        this.marketPrices.push({ market: market, prices: marketPrices });

      }
    }
    this.showSearchLoader = this.marketPrices.length>0?false:true;
    this.dataStore.latestMandiBhaavList = this.marketPrices;
  }


}
