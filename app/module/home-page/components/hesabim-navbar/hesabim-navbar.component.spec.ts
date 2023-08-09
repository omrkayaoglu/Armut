import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HesabimNavbarComponent } from './hesabim-navbar.component';

describe('HesabimNavbarComponent', () => {
  let component: HesabimNavbarComponent;
  let fixture: ComponentFixture<HesabimNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HesabimNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HesabimNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
