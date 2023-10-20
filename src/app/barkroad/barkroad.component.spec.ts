import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarkroadComponent } from './barkroad.component';

describe('BarkroadComponent', () => {
  let component: BarkroadComponent;
  let fixture: ComponentFixture<BarkroadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarkroadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarkroadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
