import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CirclyComponent } from './circly.component';

describe('CirclyComponent', () => {
  let component: CirclyComponent;
  let fixture: ComponentFixture<CirclyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CirclyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CirclyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
