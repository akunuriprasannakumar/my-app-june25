import { TestBed } from '@angular/core/testing';
import { StudentIdcardsService } from './student-idcards.service'; // ✅ Make sure the path is correct
import { HttpClientTestingModule } from '@angular/common/http/testing'; // ✅ Import this

describe('StudentIdcardsService', () => {
  let service: StudentIdcardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ] // ✅ This is required
    });
    service = TestBed.inject(StudentIdcardsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
