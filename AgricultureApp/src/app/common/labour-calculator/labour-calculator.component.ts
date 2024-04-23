import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-labour-calculator',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './labour-calculator.component.html',
  styleUrl: './labour-calculator.component.css'
})
export class LaborCalculatorComponent {
  perDayCost = 0;
  totalDays = 0;
  paymentMadeByFarmer = 0;
  totalPayout: number | null = null;

  calculateTotalPayout() {
    if (this.perDayCost && this.totalDays) {
      this.totalPayout = this.perDayCost * this.totalDays - this.paymentMadeByFarmer;
    } else {
      this.totalPayout = null;
    }
  }
  
}
