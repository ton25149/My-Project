import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyhomeComponent } from './propertyhome.component';

describe('PropertyhomeComponent', () => {
  let component: PropertyhomeComponent;
  let fixture: ComponentFixture<PropertyhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertyhomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
