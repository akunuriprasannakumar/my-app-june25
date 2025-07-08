import { TestBed } from '@angular/core/testing';

import { StudentIdcardsService } from './student-idcards.service';

describe('StudentIdcardsService', () => {
  let service: StudentIdcardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentIdcardsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
