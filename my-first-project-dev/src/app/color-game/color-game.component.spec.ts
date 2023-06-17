import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorGameComponent } from './color-game.component';

describe('ColorGameComponent', () => {
  let component: ColorGameComponent;
  let fixture: ComponentFixture<ColorGameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ColorGameComponent]
    });
    fixture = TestBed.createComponent(ColorGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
