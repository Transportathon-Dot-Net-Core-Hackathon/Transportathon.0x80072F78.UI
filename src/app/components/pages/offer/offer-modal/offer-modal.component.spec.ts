import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferModalComponent } from './offer-modal.component';

describe('OfferModalComponent', () => {
  let component: OfferModalComponent;
  let fixture: ComponentFixture<OfferModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OfferModalComponent]
    });
    fixture = TestBed.createComponent(OfferModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
