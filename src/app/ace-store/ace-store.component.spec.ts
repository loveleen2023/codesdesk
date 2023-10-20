import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AceStoreComponent } from './ace-store.component';

describe('AceStoreComponent', () => {
  let component: AceStoreComponent;
  let fixture: ComponentFixture<AceStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AceStoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AceStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
