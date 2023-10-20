import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HushComponent } from './hush.component';

describe('HushComponent', () => {
  let component: HushComponent;
  let fixture: ComponentFixture<HushComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HushComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HushComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
