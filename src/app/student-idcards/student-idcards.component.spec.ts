import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentIdcardsComponent } from './student-idcards.component';

describe('StudentIdcardsComponent', () => {
  let component: StudentIdcardsComponent;
  let fixture: ComponentFixture<StudentIdcardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentIdcardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentIdcardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
