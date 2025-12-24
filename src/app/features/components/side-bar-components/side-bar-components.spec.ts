import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarComponents } from './side-bar-components';

describe('SideBarComponents', () => {
  let component: SideBarComponents;
  let fixture: ComponentFixture<SideBarComponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SideBarComponents]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideBarComponents);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
