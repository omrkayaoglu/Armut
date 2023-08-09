import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UyeOlComponent } from './uye-ol.component';

describe('UyeOlComponent', () => {
  let component: UyeOlComponent;
  let fixture: ComponentFixture<UyeOlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UyeOlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UyeOlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
