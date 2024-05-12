import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataStoreService } from '../../services/data-store.service';


interface Expense {
  amount: number;
  reason: string;
}

interface Crop {
  name: string;
  weight: number;
  price: number;
}
@Component({
  selector: 'app-expenses-income-calculator',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './expenses-income-calculator.component.html',
  styleUrl: './expenses-income-calculator.component.css'
})
export class ExpensesIncomeCalculatorComponent {

  constructor(public dataStore:DataStoreService){}

  ngOnInit(){
    this.dataStore.activeFooterIconNumber = 2;
  }

  expenses: Expense[] = [{ amount: 0, reason: '' }];
  crops: Crop[] = [{ name: '', weight: 0, price: 0 }];
  totalIncome: number | null = null;

  addExpense() {
    this.expenses.push({ amount: 0, reason: '' });
  }

  removeExpense(index: number) {
    this.expenses.splice(index, 1);
  }

  addCrop() {
    this.crops.push({ name: '', weight: 0, price: 0 });
  }

  removeCrop(index: number) {
    this.crops.splice(index, 1);
  }

  calculateTotalIncome() {
    // Calculate total expenses
    const totalExpenses = this.expenses.reduce((total, expense) => total + expense.amount, 0);

    // Calculate total income from crops
    const totalIncomeFromCrops = this.crops.reduce((total, crop) => total + (crop.weight * crop.price), 0);

    // Calculate total income
    this.totalIncome = totalIncomeFromCrops - totalExpenses;
  }
  clearForm() {
    this.expenses = [{ amount: 0, reason: '' }];
    this.crops = [{ name: '', weight: 0, price: 0 }];
    this.totalIncome = null;
  }
}