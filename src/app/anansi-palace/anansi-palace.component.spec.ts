import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnansiPalaceComponent } from './anansi-palace.component';

describe('AnansiPalaceComponent', () => {
  let component: AnansiPalaceComponent;
  let fixture: ComponentFixture<AnansiPalaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnansiPalaceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnansiPalaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
