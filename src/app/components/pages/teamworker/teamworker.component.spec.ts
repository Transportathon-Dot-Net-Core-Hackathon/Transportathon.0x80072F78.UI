import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamworkerComponent } from './teamworker.component';

describe('TeamworkerComponent', () => {
  let component: TeamworkerComponent;
  let fixture: ComponentFixture<TeamworkerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeamworkerComponent]
    });
    fixture = TestBed.createComponent(TeamworkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
