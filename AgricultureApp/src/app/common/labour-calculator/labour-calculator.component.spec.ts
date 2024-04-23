import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabourCalculatorComponent } from './labour-calculator.component';

describe('LabourCalculatorComponent', () => {
  let component: LabourCalculatorComponent;
  let fixture: ComponentFixture<LabourCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LabourCalculatorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LabourCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
