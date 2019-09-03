
import { TestBed, inject, async } from '@angular/core/testing';
import { TestService } from './test.service';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
  
describe('TestService', () => {

  let httpMock: HttpTestingController;
  let testService: TestService;

  beforeEach(() => {

    TestBed.configureTestingModule({
        imports: [ HttpClientTestingModule ],
        providers: [ TestService ]
    });

    testService = TestBed.get(TestService);
    httpMock = TestBed.get(HttpTestingController);

  });

  it('getData() should http GET names', () => {

    const names = [{name: 'a'}, {name: 'b'}];

    testService.getData().subscribe((res) => {
      expect(res).toEqual(names);
    });

    const req = httpMock.expectOne('/app/data');
    expect(req.request.method).toEqual("GET");
    req.flush(names);

    httpMock.verify();
  });

});
