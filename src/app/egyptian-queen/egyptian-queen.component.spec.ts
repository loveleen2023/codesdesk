import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EgyptianQueenComponent } from './egyptian-queen.component';

describe('EgyptianQueenComponent', () => {
  let component: EgyptianQueenComponent;
  let fixture: ComponentFixture<EgyptianQueenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EgyptianQueenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EgyptianQueenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
