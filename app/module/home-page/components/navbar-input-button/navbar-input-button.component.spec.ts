import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarInputButtonComponent } from './navbar-input-button.component';

describe('NavbarInputButtonComponent', () => {
  let component: NavbarInputButtonComponent;
  let fixture: ComponentFixture<NavbarInputButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarInputButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarInputButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
