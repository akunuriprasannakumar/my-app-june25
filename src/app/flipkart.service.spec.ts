import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FlipkartService } from './flipkart.service';

describe('FlipkartService', () => {
  let service: FlipkartService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    }).compileComponents();

    service = TestBed.inject(FlipkartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
