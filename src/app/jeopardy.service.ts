import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';

@Injectable()
export class JeopardyService {

private baseUrl: string = 'http://jservice.io/api/';

  constructor(private http: Http) { }

  getRecords(endpoint: string): Observable<any[]> {
        let apiUrl = this.baseUrl + "random";
        return this.http.get(apiUrl)
            .map(this.extractData)
  }

    private extractData(res: Response) {
    let results = res.json();
    return results || [];
  }

}


