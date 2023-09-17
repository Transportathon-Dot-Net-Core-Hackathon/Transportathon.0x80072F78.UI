import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportationRequestModalComponent } from './transportation-request-modal.component';

describe('TransportationRequestModalComponent', () => {
  let component: TransportationRequestModalComponent;
  let fixture: ComponentFixture<TransportationRequestModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransportationRequestModalComponent]
    });
    fixture = TestBed.createComponent(TransportationRequestModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
