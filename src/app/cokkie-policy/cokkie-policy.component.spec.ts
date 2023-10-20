import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CokkiePolicyComponent } from './cokkie-policy.component';

describe('CokkiePolicyComponent', () => {
  let component: CokkiePolicyComponent;
  let fixture: ComponentFixture<CokkiePolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CokkiePolicyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CokkiePolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
