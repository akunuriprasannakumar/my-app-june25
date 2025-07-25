import { TestBed } from '@angular/core/testing';
import { RegistrationService } from './registration.service';
import { HttpClientTestingModule } from '@angular/common/http/testing'; // ✅

describe('RegistrationService', () => {
  let service: RegistrationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule] // ✅ Provide HttpClient
    });
    service = TestBed.inject(RegistrationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
