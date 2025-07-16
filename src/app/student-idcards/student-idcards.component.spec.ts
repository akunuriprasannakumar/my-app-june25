import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentIdcardsComponent } from './student-idcards.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';

describe('StudentIdcardsComponent', () => {
  let component: StudentIdcardsComponent;
  let fixture: ComponentFixture<StudentIdcardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentIdcardsComponent ],
       imports: [ FormsModule, HttpClientTestingModule ]  
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
