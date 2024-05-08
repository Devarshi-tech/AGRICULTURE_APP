import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpensesIncomeCalculatorComponent } from './expenses-income-calculator.component';

describe('ExpensesIncomeCalculatorComponent', () => {
  let component: ExpensesIncomeCalculatorComponent;
  let fixture: ComponentFixture<ExpensesIncomeCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpensesIncomeCalculatorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExpensesIncomeCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
