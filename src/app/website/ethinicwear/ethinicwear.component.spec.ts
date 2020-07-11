import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EthinicwearComponent } from './ethinicwear.component';

describe('EthinicwearComponent', () => {
  let component: EthinicwearComponent;
  let fixture: ComponentFixture<EthinicwearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EthinicwearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EthinicwearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
