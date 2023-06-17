import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicComponent } from './add-movie.component';

describe('AddMovieComponent', () => {
  let component: BasicComponent;
  let fixture: ComponentFixture<BasicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BasicComponent],
    });
    fixture = TestBed.createComponent(BasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
