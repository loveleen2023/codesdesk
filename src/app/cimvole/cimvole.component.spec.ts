import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CimvoleComponent } from './cimvole.component';

describe('CimvoleComponent', () => {
  let component: CimvoleComponent;
  let fixture: ComponentFixture<CimvoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CimvoleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CimvoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
