import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClothingsetitemComponent } from './clothingsetitem.component';

describe('ClothingsetitemComponent', () => {
  let component: ClothingsetitemComponent;
  let fixture: ComponentFixture<ClothingsetitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClothingsetitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClothingsetitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
