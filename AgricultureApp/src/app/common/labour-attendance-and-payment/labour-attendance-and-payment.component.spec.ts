import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabourAttendanceAndPaymentComponent } from './labour-attendance-and-payment.component';

describe('LabourAttendanceAndPaymentComponent', () => {
  let component: LabourAttendanceAndPaymentComponent;
  let fixture: ComponentFixture<LabourAttendanceAndPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LabourAttendanceAndPaymentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LabourAttendanceAndPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
