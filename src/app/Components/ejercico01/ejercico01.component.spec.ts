import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercico01Component } from './ejercico01.component';

describe('Ejercico01Component', () => {
  let component: Ejercico01Component;
  let fixture: ComponentFixture<Ejercico01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ejercico01Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ejercico01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
