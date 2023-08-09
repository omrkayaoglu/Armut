import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TekliflerComponent } from './teklifler.component';

describe('TekliflerComponent', () => {
  let component: TekliflerComponent;
  let fixture: ComponentFixture<TekliflerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TekliflerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TekliflerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
