import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeRecentComponent } from './employee-recent.component';

describe('EmployeeRecentComponent', () => {
  let component: EmployeeRecentComponent;
  let fixture: ComponentFixture<EmployeeRecentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeRecentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeRecentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
