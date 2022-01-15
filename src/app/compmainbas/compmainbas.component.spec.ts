import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompmainbasComponent } from './compmainbas.component';

describe('CompmainbasComponent', () => {
  let component: CompmainbasComponent;
  let fixture: ComponentFixture<CompmainbasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompmainbasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompmainbasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
