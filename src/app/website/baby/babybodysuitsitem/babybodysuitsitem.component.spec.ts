import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BabybodysuitsitemComponent } from './babybodysuitsitem.component';

describe('BabybodysuitsitemComponent', () => {
  let component: BabybodysuitsitemComponent;
  let fixture: ComponentFixture<BabybodysuitsitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BabybodysuitsitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BabybodysuitsitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
