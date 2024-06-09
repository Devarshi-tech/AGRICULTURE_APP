import { Component } from '@angular/core';
import { LabourAttendanceAndPaymentComponent } from '../common/labour-attendance-and-payment/labour-attendance-and-payment.component';
import { DataStoreService } from '../services/data-store.service';
import { DialogModule } from 'primeng/dialog';
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';

interface AttendanceRecord {
  date: string;
  present: boolean;
}

interface Payment {
  description: string;
  amount: number;
  date: string;
}

interface Labour {
  name: string;
  dailyRate: number;
  payments: Payment[];
  attendance: AttendanceRecord[];
  daysWorked: number;
}

@Component({
  selector: 'app-farm-manager-dashboard',
  standalone: true,
  imports: [InputTextModule, FloatLabelModule, FormsModule,
    ButtonModule,LabourAttendanceAndPaymentComponent,DialogModule,RouterLink,RouterLinkActive],
  templateUrl: './farm-manager-dashboard.component.html',
  styleUrl: './farm-manager-dashboard.component.css'
})
export class FarmManagerDashboardComponent {

  constructor(public dataStore:DataStoreService){}

  visible:boolean = false;
  showLabourActions:boolean = false;
  rowNumber:number=0;
  labour:Labour | any = {};

  payments:Payment[] = [
    {
      date:"10/2/24",
      description:"Seeding",
      amount:120
    }
  ];
  attandance:AttendanceRecord[] = [
    {
      date:"10/2/25",
      present:true
    }
  ];

  labourers:Labour[] = [
    {
      name:"Devarshi",
      dailyRate:100,
      attendance:this.attandance,
      payments:this.payments,
      daysWorked:15
    },
    {
      name:"Devarshi",
      dailyRate:100,
      attendance:this.attandance,
      payments:this.payments,
      daysWorked:15
    },
    {
      name:"Devarshi",
      dailyRate:100,
      attendance:this.attandance,
      payments:this.payments,
      daysWorked:15
    }
  ];

  ngOnInit(){
    this.dataStore.activeFooterIconNumber= 3;
  }

}
