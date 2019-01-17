import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPrivilegesComponent } from './admin-privileges.component';

describe('AdminPrivilegesComponent', () => {
  let component: AdminPrivilegesComponent;
  let fixture: ComponentFixture<AdminPrivilegesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPrivilegesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPrivilegesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
