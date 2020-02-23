import { TestBed } from '@angular/core/testing';

import { JsonHttpGatewayService } from './json-http-gateway.service';

describe('JsonHttpGatewayService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JsonHttpGatewayService = TestBed.get(JsonHttpGatewayService);
    expect(service).toBeTruthy();
  });
});
