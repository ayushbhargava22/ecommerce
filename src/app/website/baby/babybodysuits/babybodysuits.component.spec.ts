import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BabybodysuitsComponent } from './babybodysuits.component';

describe('BabybodysuitsComponent', () => {
  let component: BabybodysuitsComponent;
  let fixture: ComponentFixture<BabybodysuitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BabybodysuitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BabybodysuitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
