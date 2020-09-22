import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Buoi1ComponentComponent } from './buoi1-component.component';

describe('Buoi1ComponentComponent', () => {
  let component: Buoi1ComponentComponent;
  let fixture: ComponentFixture<Buoi1ComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Buoi1ComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Buoi1ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
