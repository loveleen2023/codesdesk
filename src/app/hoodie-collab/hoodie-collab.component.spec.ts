import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoodieCollabComponent } from './hoodie-collab.component';

describe('HoodieCollabComponent', () => {
  let component: HoodieCollabComponent;
  let fixture: ComponentFixture<HoodieCollabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoodieCollabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HoodieCollabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
