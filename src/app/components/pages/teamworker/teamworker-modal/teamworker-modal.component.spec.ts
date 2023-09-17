import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamworkerModalComponent } from './teamworker-modal.component';

describe('TeamworkerModalComponent', () => {
  let component: TeamworkerModalComponent;
  let fixture: ComponentFixture<TeamworkerModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeamworkerModalComponent]
    });
    fixture = TestBed.createComponent(TeamworkerModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
