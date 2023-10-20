import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EarthandComponent } from './earthand.component';

describe('EarthandComponent', () => {
  let component: EarthandComponent;
  let fixture: ComponentFixture<EarthandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EarthandComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EarthandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
