import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VueappelhttpComponent } from './vueappelhttp.component';

describe('VueappelhttpComponent', () => {
  let component: VueappelhttpComponent;
  let fixture: ComponentFixture<VueappelhttpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VueappelhttpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VueappelhttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
