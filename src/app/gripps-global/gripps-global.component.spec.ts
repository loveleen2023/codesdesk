import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrippsGlobalComponent } from './gripps-global.component';

describe('GrippsGlobalComponent', () => {
  let component: GrippsGlobalComponent;
  let fixture: ComponentFixture<GrippsGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrippsGlobalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrippsGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
