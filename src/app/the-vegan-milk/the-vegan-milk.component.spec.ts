import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheVeganMilkComponent } from './the-vegan-milk.component';

describe('TheVeganMilkComponent', () => {
  let component: TheVeganMilkComponent;
  let fixture: ComponentFixture<TheVeganMilkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheVeganMilkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TheVeganMilkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
