import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmManagerDashboardComponent } from './farm-manager-dashboard.component';

describe('FarmManagerDashboardComponent', () => {
  let component: FarmManagerDashboardComponent;
  let fixture: ComponentFixture<FarmManagerDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FarmManagerDashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FarmManagerDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
