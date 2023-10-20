import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TanoarJewelryComponent } from './tanoar-jewelry.component';

describe('TanoarJewelryComponent', () => {
  let component: TanoarJewelryComponent;
  let fixture: ComponentFixture<TanoarJewelryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TanoarJewelryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TanoarJewelryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
