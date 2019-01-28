import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export abstract class RestService {

  protected baseUrl: string = 'http://localhost:8080/api/v1/';

  constructor(private http: HttpClient) { }

  protected httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json;charset=UTF-8'
    })
  }

  protected extractData(res: Response) {
    let body = res;
    return body || {};
  }

  protected get(relativeUrl: string): Observable<any> {
    return this.http.get(this.baseUrl + relativeUrl).pipe(map(this.extractData));
  }

  protected getById(relativeUrl: string, id: number): Observable<any> {
    return this.http.get(this.baseUrl + relativeUrl + '/' + id).pipe(map(this.extractData));
  }

  protected getByTwoDifferentIds(relativeUrl: string, id1: number, id2: number): Observable<any> {
    return this.http.get(this.baseUrl + relativeUrl + '/' + id1 + '/' + id2).pipe(map(this.extractData));
  }
}
