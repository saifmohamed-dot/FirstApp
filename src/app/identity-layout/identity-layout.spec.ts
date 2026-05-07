import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentityLayout } from './identity-layout';

describe('IdentityLayout', () => {
  let component: IdentityLayout;
  let fixture: ComponentFixture<IdentityLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IdentityLayout],
    }).compileComponents();

    fixture = TestBed.createComponent(IdentityLayout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
