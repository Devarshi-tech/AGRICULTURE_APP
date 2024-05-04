import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { WeatherComponent } from '../weather/weather.component';
import { AgricultureService } from '../../services/agriculture.service';
import { DatePipe } from '@angular/common';
import { CarouselComponent } from '../carousel/carousel.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, WeatherComponent,CarouselComponent],
  providers: [DatePipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private datepipe: DatePipe, private agricultureService: AgricultureService) { }
  date: Date = new Date();
  latestDate: string | null = "";
  districtsList:any=[];
  mandiList:any = [];


  ngOnInit() {
    this.agricultureService.fetchAllStates().subscribe(data => {
      let responseList: any = data;
      responseList.forEach((element:any) => {
        // console.log(element.districts)
        this.districtsList = element.districts;
      });
      });
    //   let districtsList: any = responseList.filter((data: any) => { data.stateName == "Madhya Pradesh" });
    //   console.log("list")
    //   console.log(districtsList);
    // });
    this.latestDate = this.datepipe.transform(this.date.getTime(), "dd-MMM-yyyy");


    // let obj = {
    //   stateCode: "MP",
    //   stateName: "Madhya Pradesh",
    //   priceStartDate: this.datepipe.transform(this.date.getTime(), "dd-MMM-yyyy"),
    //   priceEndDate: this.datepipe.transform(this.date.getTime(), "dd-MMM-yyyy"),
    //   districtId: 6,
    //   districtName: "Indore",
    //   commodityId: 1,
    //   commodityName: "Wheat",
    //   marketId: 2,
    //   marketName: "Indore"
    // }

    // this.agricultureService.allMandiPriceList(obj).subscribe(data => {
    //   console.log(data);
    // });
  }

}
