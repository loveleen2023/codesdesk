import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopMersiComponent } from './shop-mersi.component';

describe('ShopMersiComponent', () => {
  let component: ShopMersiComponent;
  let fixture: ComponentFixture<ShopMersiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopMersiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopMersiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
