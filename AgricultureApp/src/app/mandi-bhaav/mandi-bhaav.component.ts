import { Component } from '@angular/core';
import { AgricultureService } from '../services/agriculture.service';

@Component({
  selector: 'app-mandi-bhaav',
  standalone: true,
  imports: [],
  templateUrl: './mandi-bhaav.component.html',
  styleUrl: './mandi-bhaav.component.css'
})
export class MandiBhaavComponent {
  constructor(private agricultureServices:AgricultureService){}

  mandiList:any = [
    {"mandiID": null, "mandiName": "उज्जैन मंडी भाव", "lasteUpdated": null, "note": null, "itemsList": null},
    {"mandiID": null, "mandiName": "हरदा मंडी भाव", "lasteUpdated": null, "note": null, "itemsList": null},
    {"mandiID": null, "mandiName": "जावरा मंडी भाव", "lasteUpdated": null, "note": null, "itemsList": null},
    {"mandiID": null, "mandiName": "देवास मंडी भाव", "lasteUpdated": null, "note": null, "itemsList": null},
    {"mandiID": null, "mandiName": "बेतुल मंडी भाव", "lasteUpdated": null, "note": null, "itemsList": null}
  ];

  ngOnInit(){
    this.agricultureServices.allMandiPriceList().subscribe(data => {
      // console.log(data);
      this.mandiList = data;
    });

  }

}
