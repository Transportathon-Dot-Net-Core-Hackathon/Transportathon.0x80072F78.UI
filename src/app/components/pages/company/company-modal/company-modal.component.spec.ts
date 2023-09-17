import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyModalComponent } from './company-modal.component';

describe('CompanyModalComponent', () => {
  let component: CompanyModalComponent;
  let fixture: ComponentFixture<CompanyModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompanyModalComponent]
    });
    fixture = TestBed.createComponent(CompanyModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
