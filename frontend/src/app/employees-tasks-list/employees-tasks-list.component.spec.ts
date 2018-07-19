import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesTasksListComponent } from './employees-tasks-list.component';

describe('EmployeesTasksListComponent', () => {
  let component: EmployeesTasksListComponent;
  let fixture: ComponentFixture<EmployeesTasksListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeesTasksListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeesTasksListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
