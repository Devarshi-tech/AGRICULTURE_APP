
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface AttendanceRecord {
  date: string;
  present: boolean;
  editing?: boolean;  // Add an optional editing property
}

interface Payment {
  description: string;
  amount: number;
  date: string;
  editing?: boolean;  // Add an optional editing property
}

interface Labour {
  name: string;
  dailyRate: number;
  payments: Payment[];
  attendance: AttendanceRecord[];
  daysWorked: number;
}

@Component({
  selector: 'app-labour-attendance-and-payment',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './labour-attendance-and-payment.component.html',
  styleUrl: './labour-attendance-and-payment.component.css'
})
export class LabourAttendanceAndPaymentComponent  {
  selectedLabourIndex: number | null = null;
  labourers: Labour[] = [];
  newLabour: Labour = { name: '', dailyRate: 0, payments: [], attendance: [], daysWorked: 0 };
  newPayment: Payment = { description: '', amount: 0, date: new Date().toISOString().split('T')[0] };
  selectedLabour: Labour | null = null;
  editIndex: number | null = null;
  today: string = new Date().toISOString().split('T')[0];
  newAttendanceDate: string = '';

  addLabour() {
    if (this.newLabour.name.trim() === '') {
      alert('Name is required.');
      return;
    }

    const existingLabourIndex = this.labourers.findIndex(labour =>
      labour.name.trim().toLowerCase() === this.newLabour.name.trim().toLowerCase()
    );

    if (existingLabourIndex !== -1 && this.editIndex === null) {
      alert('Labour with the same name already exists.');
      return;
    }

    if (this.editIndex !== null) {
      this.labourers[this.editIndex] = { ...this.newLabour };
      this.editIndex = null;
    } else {
      this.labourers.push({ ...this.newLabour });
    }
    this.resetForm();
  }

  editLabour(index: number, event: Event) {
    event.stopPropagation();
    this.newLabour = { ...this.labourers[index] };
    this.editIndex = index;
    this.selectedLabour = this.labourers[index];
  }

  deleteLabour(index: number, event: Event) {
    event.stopPropagation();
    if (confirm('Are you sure you want to delete this labourer?')) {
      this.labourers.splice(index, 1);
      this.selectedLabour = null;
    }
  }

  selectLabour(labour: Labour, index: number) {
    this.selectedLabourIndex = index;
    this.selectedLabour = labour;
  }

  addPayment() {
    if (!this.selectedLabour) {
      alert('No labour selected.');
      return;
    }
    this.selectedLabour.payments.push({ ...this.newPayment });
    this.newPayment = { description: '', amount: 0, date: new Date().toISOString().split('T')[0] };
  }

  editPayment(payment: Payment) {
    payment.editing = true;
  }

  savePayment(payment: Payment) {
    payment.editing = false;
  }

  deletePayment(labour: Labour, payment: Payment) {
    if (confirm('Are you sure you want to delete this payment?')) {
      const index = labour.payments.indexOf(payment);
      if (index !== -1) {
        labour.payments.splice(index, 1);
      }
    }
  }

  editAttendance(record: AttendanceRecord) {
    record.editing = true;
  }

  saveAttendance(record: AttendanceRecord) {
    record.editing = false;
    this.selectedLabour!.daysWorked = this.selectedLabour!.attendance.filter(rec => rec.present).length;
  }

  markAttendance(index: number, present: boolean) {
    const today = this.today;
    const existingRecordIndex = this.labourers[index].attendance.findIndex(record => record.date === today);

    if (existingRecordIndex !== -1) {
      this.labourers[index].attendance[existingRecordIndex].present = present;
    } else {
      const attendanceRecord: AttendanceRecord = { date: today, present };
      this.labourers[index].attendance.push(attendanceRecord);
    }

    this.labourers[index].daysWorked = this.labourers[index].attendance.filter(record => record.present).length;
  }

  isPresent(index: number): boolean {
    const today = this.today;
    const record = this.labourers[index].attendance.find(record => record.date === today);
    return record ? record.present : false;
  }

  isAbsent(index: number): boolean {
    const today = this.today;
    const record = this.labourers[index].attendance.find(record => record.date === today);
    return record ? !record.present : false;
  }

  calculateRemainingAmount(labour: Labour): number {
    return labour.daysWorked * labour.dailyRate - this.calculateTotalAmountPaid(labour);
  }

  calculateTotalAmountPaid(labour: Labour): number {
    return labour.payments.reduce((total, payment) => total + payment.amount, 0);
  }

  clearZero(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.value === '0') {
      input.value = '';
    }
  }

  resetForm() {
    this.newLabour = { name: '', dailyRate: 0, payments: [], attendance: [], daysWorked: 0 };
    this.newPayment = { description: '', amount: 0, date: new Date().toISOString().split('T')[0] };
    this.editIndex = null;
    this.selectedLabour = null;
  }
}
