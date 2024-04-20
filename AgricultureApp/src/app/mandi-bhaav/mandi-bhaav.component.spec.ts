import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MandiBhaavComponent } from './mandi-bhaav.component';

describe('MandiBhaavComponent', () => {
  let component: MandiBhaavComponent;
  let fixture: ComponentFixture<MandiBhaavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MandiBhaavComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MandiBhaavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
