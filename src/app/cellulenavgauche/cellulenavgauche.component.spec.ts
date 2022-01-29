import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CellulenavgaucheComponent } from './cellulenavgauche.component';

describe('CellulenavgaucheComponent', () => {
  let component: CellulenavgaucheComponent;
  let fixture: ComponentFixture<CellulenavgaucheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CellulenavgaucheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CellulenavgaucheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
