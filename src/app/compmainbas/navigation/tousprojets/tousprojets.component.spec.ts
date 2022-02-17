import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TousprojetsComponent } from './tousprojets.component';

describe('TousprojetsComponent', () => {
  let component: TousprojetsComponent;
  let fixture: ComponentFixture<TousprojetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TousprojetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TousprojetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
