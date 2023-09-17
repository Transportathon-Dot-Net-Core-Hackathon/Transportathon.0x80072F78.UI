import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportationRequestComponent } from './transportation-request.component';

describe('TransportationRequestComponent', () => {
  let component: TransportationRequestComponent;
  let fixture: ComponentFixture<TransportationRequestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransportationRequestComponent]
    });
    fixture = TestBed.createComponent(TransportationRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
