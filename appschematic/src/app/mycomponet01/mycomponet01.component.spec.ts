import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mycomponet01Component } from './mycomponet01.component';

describe('Mycomponet01Component', () => {
  let component: Mycomponet01Component;
  let fixture: ComponentFixture<Mycomponet01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mycomponet01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mycomponet01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
