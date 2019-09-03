import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TestService {

  constructor(private http: HttpClient) { }

  getData(): Observable<any>{
    return this.http.get('/app/data');
  }

}