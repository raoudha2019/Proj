import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UdateUsersComponent } from './udate-users.component';

describe('UdateUsersComponent', () => {
  let component: UdateUsersComponent;
  let fixture: ComponentFixture<UdateUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UdateUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UdateUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
