import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HizmetlerLinkComponent } from './hizmetler-link.component';

describe('HizmetlerLinkComponent', () => {
  let component: HizmetlerLinkComponent;
  let fixture: ComponentFixture<HizmetlerLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HizmetlerLinkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HizmetlerLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
