import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DreamersComponent } from './dreamers.component';

describe('DreamersComponent', () => {
  let component: DreamersComponent;
  let fixture: ComponentFixture<DreamersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DreamersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DreamersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
