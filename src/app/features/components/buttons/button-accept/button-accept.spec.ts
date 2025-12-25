import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonAccept } from './button-accept';

describe('ButtonAccept', () => {
  let component: ButtonAccept;
  let fixture: ComponentFixture<ButtonAccept>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonAccept]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonAccept);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
