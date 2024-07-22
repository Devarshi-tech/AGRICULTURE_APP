import { Component } from '@angular/core';
import { LabourAttendanceAndPaymentComponent } from '../common/labour-attendance-and-payment/labour-attendance-and-payment.component';
import { DataStoreService } from '../services/data-store.service';
import { DialogModule } from 'primeng/dialog';
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { TabViewModule } from 'primeng/tabview';
import { AgricultureService } from '../services/agriculture.service';

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
    ButtonModule, LabourAttendanceAndPaymentComponent, DialogModule, RouterLink, RouterLinkActive, TabViewModule],
  templateUrl: './farm-manager-dashboard.component.html',
  styleUrl: './farm-manager-dashboard.component.css'
})
export class FarmManagerDashboardComponent {

  constructor(public dataStore: DataStoreService, private agricultureService: AgricultureService) { }

  visible: boolean = false;
  showLabourActions: boolean = false;
  rowNumber: number = 0;
  labourMainObject: any = {};
  showLabourDetails: boolean = false;
  // labourName:string = "";

  payments: Payment[] = [
    {
      date: "10/2/24",
      description: "Seeding",
      amount: 120
    }
  ];
  attandance: AttendanceRecord[] = [
    {
      date: "10/2/25",
      present: true
    }
  ];

  labourers: any = [
    // {
    //   name:"Pritam",
    //   dailyRate:100,
    //   attendance:this.attandance,
    //   payments:this.payments,
    //   daysWorked:15
    // },
    // {
    //   name:"Devarshi",
    //   dailyRate:100,
    //   attendance:this.attandance,
    //   payments:this.payments,
    //   daysWorked:15
    // },
    // {
    //   name:"Devarshi",
    //   dailyRate:100,
    //   attendance:this.attandance,
    //   payments:this.payments,
    //   daysWorked:15
    // }
  ];

  tabs: { title: string, content: string }[] = [];
  labourGridFilter: any = {}

  ngOnInit() {
    this.tabs = [
      { title: 'Attendance', content: 'Tab 1 Content' },
      { title: 'Payments', content: 'Tab 2 Content' },

    ];

    this.labourGridFilter = [
      { title: 'Monthly', content: 'Tab 1 Content' },
      { title: 'Weekly', content: 'Tab 2 Content' },

    ];

    this.dataStore.activeFooterIconNumber = 3;

    // setTimeout(() => {
    //   console.log(this.getCurrentUser().labours);
    
    // }, 5000);

  }

  // ngAfterInit(){
  //   this.agricultureService.getCurrentUser().subscribe((data: any) => {
  //     let userObj:any = {};
  //     userObj = data;
  //       this.labourers = userObj.labours;
  //     });
  // }

  /**
   * Create New Labour
   */
  createLabour() {
    // console.log(labour);
    // console.log(this.labour)
    let tempLabourObject: any = {};
    let currentUser: any = {};
    // console.log("hello");

    // this.agricultureService.getCurrentUser().subscribe((data: any) => {
      currentUser = this.getCurrentUser();
    //   // console.log(currentUser)
    // });

    setTimeout(() => {
      // console.log("labour Obj after 200ms")
      // console.log(labourObj)
      tempLabourObject.labourName = this.labourMainObject.labourName || "Labour_default";
      tempLabourObject.user = {};
      tempLabourObject.user.userid = currentUser.userid;
      console.log(this.labourMainObject);
      this.agricultureService.createLabour(tempLabourObject).subscribe((data: any) => {
        // this.dataStore.messageAlert = "Labour added!";
        // this.dataStore.messageAlertSevierity = ["text-green-700"];

        // this.dataStore.messageAlertSevierity = {}
        // this.labourers.push(
        //   {
        //     labourName:data.labourName,
        //     totalPresents:data.totalPresents,
        //     totalAmountPaid:data.totalAmountPaid
        //   }
        // );
        this.visible = false;
      });
    }, 200);

  }

  printLabourName(a: any) {
    console.log(a);
  }

  getCurrentUser(){
    let currentUser:any = {};
    this.agricultureService.getCurrentUser().subscribe((data: any) => {
      currentUser = data;
      // console.log(currentUser)
    });
    return currentUser;
  }

}
