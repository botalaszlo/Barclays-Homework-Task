import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { VatService } from './vat.service';

describe('VatService', () => {
  beforeEach(() => TestBed.configureTestingModule({ imports: [HttpClientTestingModule]}));

  it('should be created', () => {
    const service: VatService = TestBed.get(VatService);
    expect(service).toBeTruthy();
  });
});
