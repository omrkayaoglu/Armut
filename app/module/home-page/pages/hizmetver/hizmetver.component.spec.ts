import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HizmetverComponent } from './hizmetver.component';

describe('HizmetverComponent', () => {
  let component: HizmetverComponent;
  let fixture: ComponentFixture<HizmetverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HizmetverComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HizmetverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
