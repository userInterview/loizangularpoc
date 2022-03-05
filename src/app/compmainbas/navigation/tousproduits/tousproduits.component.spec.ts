import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TousproduitsComponent } from './tousproduits.component';

describe('TousproduitsComponent', () => {
  let component: TousproduitsComponent;
  let fixture: ComponentFixture<TousproduitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TousproduitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TousproduitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
