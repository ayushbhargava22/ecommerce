import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClothingsetComponent } from './clothingset.component';

describe('ClothingsetComponent', () => {
  let component: ClothingsetComponent;
  let fixture: ComponentFixture<ClothingsetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClothingsetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClothingsetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
