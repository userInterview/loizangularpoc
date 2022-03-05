import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToutesfaillesComponent } from './toutesfailles.component';

describe('ToutesfaillesComponent', () => {
  let component: ToutesfaillesComponent;
  let fixture: ComponentFixture<ToutesfaillesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToutesfaillesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToutesfaillesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
