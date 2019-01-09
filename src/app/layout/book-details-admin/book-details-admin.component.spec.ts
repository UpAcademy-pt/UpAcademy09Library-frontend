import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookDetailsAdminComponent } from './book-details-admin.component';

describe('BookDetailsAdminComponent', () => {
  let component: BookDetailsAdminComponent;
  let fixture: ComponentFixture<BookDetailsAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookDetailsAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookDetailsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
