import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HesabimComponent } from './hesabim.component';

describe('HesabimComponent', () => {
  let component: HesabimComponent;
  let fixture: ComponentFixture<HesabimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HesabimComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HesabimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
