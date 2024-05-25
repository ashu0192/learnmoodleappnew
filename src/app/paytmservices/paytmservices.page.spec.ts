import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaytmservicesPage } from './paytmservices.page';

describe('PaytmservicesPage', () => {
  let component: PaytmservicesPage;
  let fixture: ComponentFixture<PaytmservicesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PaytmservicesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
