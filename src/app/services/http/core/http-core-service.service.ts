import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpCoreServiceService {

  constructor(private httpClient: HttpClient) { }

  public get(url: string): Observable<any> {
    return this.httpClient.get(url);
  }

  public post(url: string, params: any): Observable<any> {
    return this.httpClient.post(url, params);
  }
}
